module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
      id_pembayaran: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_transaksi: DataTypes.INTEGER,
      metode: {
        type: DataTypes.ENUM('cod', 'mbanking')
      },
      tanggal: DataTypes.DATE
    }, {
      tableName: 'pembayaran'
    });
    return Payment;
  };
  