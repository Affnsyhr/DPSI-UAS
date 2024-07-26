const { Sequelize } = require('sequelize');
const config = require('../src/config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

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
