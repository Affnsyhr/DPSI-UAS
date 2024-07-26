const jwt = require('jsonwebtoken'); // Mengimpor modul jsonwebtoken untuk bekerja dengan JSON Web Tokens (JWT)

// Middleware untuk otentikasi token JWT
function authenticateToken(req, res, next) {
  // Mengambil token dari header 'Authorization' dan memisahkan dari skema 'Bearer'
  const token = req.header('Authorization').split(' ')[1];
  
  // Jika token tidak ada, kembalikan respon 401 (Unauthorized)
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    // Memverifikasi token menggunakan secret key yang disimpan dalam environment variable
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // Menyimpan data pengguna yang diverifikasi ke dalam objek request
    req.user = verified;
    // Melanjutkan ke middleware atau route handler berikutnya
    next();
  } catch (error) {
    // Jika verifikasi gagal, kembalikan respon 400 (Bad Request) dengan pesan 'Invalid token'
    res.status(400).json({ error: 'Invalid token' });
  }
}

// Middleware untuk otorisasi berdasarkan peran pengguna
const authorizeRole = (roles = []) => {
  // Jika roles adalah string, ubah menjadi array dengan satu elemen
  if (typeof roles === 'string') {
    roles = [roles];
  }

  // Middleware function untuk memeriksa peran pengguna
  return (req, res, next) => {
    // Jika peran pengguna tidak termasuk dalam array roles yang diizinkan, kembalikan respon 403 (Forbidden)
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    // Melanjutkan ke middleware atau route handler berikutnya
    next();
  };
};

// Mengekspor middleware authenticateToken dan authorizeRole agar dapat digunakan di file lain
module.exports = { authorizeRole, authenticateToken };
