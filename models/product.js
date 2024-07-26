module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id_produk: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      stok: DataTypes.INTEGER,
      harga: DataTypes.DECIMAL(10, 2)
    }, {
      tableName: 'produk'
    });
    return Product;
  };
  