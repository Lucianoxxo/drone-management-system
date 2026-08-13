const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta de prueba: verifica que el servidor y la base de datos funcionan
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      mensaje: 'AeroWatch Drone Management API funcionando 🚁',
      hora_servidor: result.rows[0].now
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
});

app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});