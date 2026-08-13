const pool = require('../config/db');

const getAllDrones = async () => {
  const result = await pool.query('SELECT * FROM drones ORDER BY id');
  return result.rows;
};

const getDroneById = async (id) => {
  const result = await pool.query('SELECT * FROM drones WHERE id = $1', [id]);
  return result.rows[0];
};

const createDrone = async (drone) => {
  const { modelo, fabricante, serial, bateria, estado, ubicacion } = drone;
  const result = await pool.query(
    `INSERT INTO drones (modelo, fabricante, serial, bateria, estado, ubicacion)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [modelo, fabricante, serial, bateria ?? 100, estado ?? 'DISPONIBLE', ubicacion]
  );
  return result.rows[0];
};

const updateDrone = async (id, drone) => {
  const { modelo, fabricante, serial, bateria, estado, ubicacion, horas_vuelo } = drone;
  const result = await pool.query(
    `UPDATE drones
     SET modelo = $1, fabricante = $2, serial = $3, bateria = $4,
         estado = $5, ubicacion = $6, horas_vuelo = $7
     WHERE id = $8 RETURNING *`,
    [modelo, fabricante, serial, bateria, estado, ubicacion, horas_vuelo, id]
  );
  return result.rows[0];
};

const deleteDrone = async (id) => {
  const result = await pool.query('DELETE FROM drones WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = { getAllDrones, getDroneById, createDrone, updateDrone, deleteDrone };