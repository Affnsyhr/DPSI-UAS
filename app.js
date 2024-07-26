const express = require('express');
const app = express();
const userRoutes = require('./src/routes/user');
const productRoutes = require('./src/routes/product');
require('dotenv').config();

app.use(express.json());
app.use('/auth', userRoutes);
app.use('/products', productRoutes);

const db = require('./models');
db.sequelize.sync();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;