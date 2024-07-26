module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      id_transaksi: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      tanggal: DataTypes.DATE,
      id_customer: DataTypes.INTEGER,
      id_cashier: DataTypes.INTEGER
    }, {
      tableName: 'transaksi'
    });
    return Transaction;
  };
  