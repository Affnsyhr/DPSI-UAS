const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectModule : require('mysql2')
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
db.Transaction = require('./transaction')(sequelize, Sequelize);
db.TransactionDetail = require('./transactiondetails')(sequelize, Sequelize);
db.Payment = require('./payment')(sequelize, Sequelize);
db.Report = require('./report')(sequelize, Sequelize);

// Define relationships
db.User.hasMany(db.Transaction, { foreignKey: 'id_customer' });
db.Transaction.belongsTo(db.User, { foreignKey: 'id_customer' });

db.User.hasMany(db.Transaction, { foreignKey: 'id_cashier' });
db.Transaction.belongsTo(db.User, { foreignKey: 'id_cashier' });

db.Transaction.hasMany(db.TransactionDetail, { foreignKey: 'id_transaksi' });
db.TransactionDetail.belongsTo(db.Transaction, { foreignKey: 'id_transaksi' });

db.Product.hasMany(db.TransactionDetail, { foreignKey: 'id_produk' });
db.TransactionDetail.belongsTo(db.Product, { foreignKey: 'id_produk' });

db.Transaction.hasOne(db.Payment, { foreignKey: 'id_transaksi' });
db.Payment.belongsTo(db.Transaction, { foreignKey: 'id_transaksi' });

db.User.hasMany(db.Report, { foreignKey: 'id_admingudang' });
db.Report.belongsTo(db.User, { foreignKey: 'id_admingudang' });

db.User.hasMany(db.Report, { foreignKey: 'id_manager' });
db.Report.belongsTo(db.User, { foreignKey: 'id_manager' });

module.exports = db;
