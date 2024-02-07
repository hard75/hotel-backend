// /src/routes/userRoutes.js
const express = require('express');
const {
    consultarDisponibilidad,
    consultarTarifas,
    calcularTarifaCancelar
} = require('../controllers');

const router = express.Router();

router.get('/disponibilidad/:sitio', consultarDisponibilidad);

router.get('/tarifas/:sitio/:temporada/:tipoAlojamiento/:cantidadPersonas', consultarTarifas);

router.get('/calcular-tarifa/:sitio/:cantidadHabitaciones/:cantidadPersonas/:tipoAlojamiento/:temporada', calcularTarifaCancelar);

module.exports = router;
