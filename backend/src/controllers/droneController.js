const droneModel = require('../models/droneModel');

const getDrones = async (req, res) => {
  try {
    const drones = await droneModel.getAllDrones();
    res.json(drones);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los drones' });
  }
};

const getDrone = async (req, res) => {
  try {
    const drone = await droneModel.getDroneById(req.params.id);
    if (!drone) return res.status(404).json({ error: 'Drone no encontrado' });
    res.json(drone);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener el drone' });
  }
};

const postDrone = async (req, res) => {
  try {
    const { modelo, fabricante, serial } = req.body;
    if (!modelo || !fabricante || !serial) {
      return res.status(400).json({ error: 'modelo, fabricante y serial son obligatorios' });
    }
    const nuevoDrone = await droneModel.createDrone(req.body);
    res.status(201).json(nuevoDrone);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear el drone' });
  }
};

const putDrone = async (req, res) => {
  try {
    const droneActualizado = await droneModel.updateDrone(req.params.id, req.body);
    if (!droneActualizado) return res.status(404).json({ error: 'Drone no encontrado' });
    res.json(droneActualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar el drone' });
  }
};

const removeDrone = async (req, res) => {
  try {
    const droneEliminado = await droneModel.deleteDrone(req.params.id);
    if (!droneEliminado) return res.status(404).json({ error: 'Drone no encontrado' });
    res.json({ mensaje: 'Drone eliminado correctamente', drone: droneEliminado });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar el drone' });
  }
};

module.exports = { getDrones, getDrone, postDrone, putDrone, removeDrone };