module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define('Report', {
      id_laporan: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_admingudang: DataTypes.INTEGER,
      id_manager: DataTypes.INTEGER,
      isi_laporan: DataTypes.TEXT,
      tanggal: DataTypes.DATE
    }, {
      tableName: 'laporan'
    });
    return Report;
  };
  