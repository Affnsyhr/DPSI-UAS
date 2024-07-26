module.exports = (sequelize, DataTypes) => {
    const TransactionDetail = sequelize.define('TransactionDetail', {
      id_detailtransaksi: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_transaksi: DataTypes.INTEGER,
      id_produk: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER,
      harga: DataTypes.DECIMAL(10, 2)
    }, {
      tableName: 'detail_transaksi'
    });
    return TransactionDetail;
  };
  