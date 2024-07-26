const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { authenticateToken,  authorizeRole} = require('../middlewares/auth');

router.get('/', authenticateToken, authorizeRole(['admin_gudang', 'manager']),productController.getAllProducts);
router.post('/', authenticateToken, authorizeRole(['admin_gudang', 'manager']),productController.createProduct);
router.put('/:id', authenticateToken, authorizeRole(['admin_gudang', 'manager']), productController.updateProduct);
router.delete('/:id',authenticateToken, authorizeRole(['admin_gudang', 'manager']), productController.deleteProduct);

module.exports = router;
