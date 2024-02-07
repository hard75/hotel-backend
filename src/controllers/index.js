const {
  Disponibilidad,
  Tarifa,
  Reserva
} = require('../models');

exports.consultarDisponibilidad = async (req, res) => {
  const { sitio, fechaInicio, fechaFin } = req.params;

  try {
    const disponibilidad = await Disponibilidad.find({
      sitio: sitio,
      fecha: { $gte: fechaInicio, $lte: fechaFin }
    });

    res.json({ disponibilidad });
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar disponibilidad' });
  }
};


exports.consultarTarifas = async (req, res) => {
  const { sitio, tipoAlojamiento, cantidadPersonas, temporada } = req.params;

  console.log('>>>>', sitio);

  try {
    const tarifas = await Tarifa.find({
      sitio: sitio,
      temporada: temporada,
      tipoAlojamiento: tipoAlojamiento
    });

    const disponibilidad = await Disponibilidad.find({
      sitio: sitio
    });

    res.json({ tarifas, cantidadPersonasEsValida: cantidadPersonas <= disponibilidad.numeroPersonasHabitacion });
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar tarifas' });
  }
};

exports.calcularTarifaCancelar = async (req, res) => {
  const { sitio, cantidadHabitaciones, cantidadPersonas, tipoAlojamiento, temporada } = req.params;

  try {
    const tarifa = await Tarifa.findOne({
      sitio: sitio,
      temporada,
      tipoAlojamiento: tipoAlojamiento
    });

    const disponibilidad = await Disponibilidad.find({
      sitio: sitio
    });

    if (!tarifa) {
      throw new Error('Tarifa no encontrada');
    }

    if (cantidadPersonas > disponibilidad.numeroPersonasHabitacion) {
      throw new Error('Cantidad de personas excede el limite');
    }

    const tarifaBase = tarifa[`tarifa${tipoAlojamiento}`];
    const totalTarifa = tarifaBase * cantidadHabitaciones * cantidadPersonas;

    res.json({ tarifa, tarifaTotal: totalTarifa });
  } catch (error) {
    res.status(500).json({ error: 'Error al calcular tarifa a cancelar', msg: error });
  }
};
