const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

router.get('/', (req, res) => {
    res.send('Ruta de Trips funcionando correctamente');
});

router.get('/trips', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;