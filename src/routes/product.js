const express = require('express'); // Mengimpor modul express untuk membuat router
const router = express.Router(); // Membuat instance router dari express
const productController = require('../controllers/product'); // Mengimpor controller untuk produk
const { authenticateToken, authorizeRole } = require('../middlewares/auth'); // Mengimpor middleware untuk otentikasi dan otorisasi

// Route untuk mendapatkan semua produk
// Middleware authenticateToken memverifikasi token JWT
// Middleware authorizeRole memastikan hanya 'admin_gudang' dan 'manager' yang dapat mengakses
router.get('/', authenticateToken, authorizeRole(['admin_gudang', 'manager']), productController.getAllProducts);

// Route untuk membuat produk baru
// Middleware authenticateToken memverifikasi token JWT
// Middleware authorizeRole memastikan hanya 'admin_gudang' dan 'manager' yang dapat mengakses
router.post('/', authenticateToken, authorizeRole(['admin_gudang', 'manager']), productController.createProduct);

// Route untuk memperbarui produk berdasarkan ID
// Middleware authenticateToken memverifikasi token JWT
// Middleware authorizeRole memastikan hanya 'admin_gudang' dan 'manager' yang dapat mengakses
router.put('/:id', authenticateToken, authorizeRole(['admin_gudang', 'manager']), productController.updateProduct);

// Route untuk menghapus produk berdasarkan ID
// Middleware authenticateToken memverifikasi token JWT
// Middleware authorizeRole memastikan hanya 'admin_gudang' dan 'manager' yang dapat mengakses
router.delete('/:id', authenticateToken, authorizeRole(['admin_gudang', 'manager']), productController.deleteProduct);

// Mengekspor router agar dapat digunakan di file lain
module.exports = router;
