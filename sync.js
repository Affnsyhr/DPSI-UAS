const sequelize = require('./src/db');
const User = require('./models/user');
const Produk = require('./models/product');
const Transaksi = require('./models/transaction');
const DetailTransaksi = require('./models/transactiondetail');
const Pembayaran = require('./models/transaction');
const Laporan = require('./models/report');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
