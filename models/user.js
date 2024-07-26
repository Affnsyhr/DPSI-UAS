module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      alamat: DataTypes.STRING,
      telepon: DataTypes.STRING,
      email: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('customer', 'cashier', 'admin_gudang', 'manager')
      }
    }, {
      tableName: 'user'
    });
    return User;
  };
  