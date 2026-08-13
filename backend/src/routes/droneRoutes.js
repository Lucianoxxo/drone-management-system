const express = require('express');
const router = express.Router();
const droneController = require('../controllers/droneController');

router.get('/', droneController.getDrones);
router.get('/:id', droneController.getDrone);
router.post('/', droneController.postDrone);
router.put('/:id', droneController.putDrone);
router.delete('/:id', droneController.removeDrone);

module.exports = router;