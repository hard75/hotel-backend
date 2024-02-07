const mongoose = require('mongoose');
const disponibilidadSchema = new mongoose.Schema({
  sitio: String,
  fecha: Date,
  numeroPersonasHabitacion: Number,
  capacidadEstándar: Number,
  capacidadPremium: Number,
  capacidadVIP: Number
});

const tarifaSchema = new mongoose.Schema({
  sitio: String,
  temporada: String,
  extraPortemporada: Number,
  tipoAlojamiento: String,
  tarifaEstándar: Number,
  tarifaPremium: Number,
  tarifaVIP: Number
});

const Disponibilidad = mongoose.model('Disponibilidad', disponibilidadSchema);
const Tarifa = mongoose.model('Tarifa', tarifaSchema);

module.exports = {
  Disponibilidad,
  Tarifa
};