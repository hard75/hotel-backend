const mongoose = require('mongoose');
const {
    Disponibilidad
} = require('./models');

mongoose.connect('mongodb://localhost:27017/hotel');

const db = mongoose.connection;

db.once('open', async () => {
    try {
        const barranquilla = new Disponibilidad({
            sitio: 'barranquilla',
            fecha: null,
            numeroPersonasHabitacion: 4,
            capacidadEstándar: 30,
            capacidadPremium: 3,
            capacidadVIP: 0
        })
        
        await barranquilla.save();
        
        const cali = new Disponibilidad({
            sitio: 'cali',
            fecha: null,
            numeroPersonasHabitacion: 6,
            capacidadEstándar: 0,
            capacidadPremium: 20,
            capacidadVIP: 2
        });
        
        await cali.save();
        
        const cartagena = new Disponibilidad({
            sitio: 'cartagena',
            fecha: null,
            numeroPersonasHabitacion: 8,
            capacidadEstándar: 10,
            capacidadPremium: 1,
            capacidadVIP: 0
        });

        await cartagena.save();
        
        const bogota = new Disponibilidad({
            sitio: 'bogota',
            fecha: null,
            numeroPersonasHabitacion: 6,
            capacidadEstándar: 20,
            capacidadPremium: 20,
            capacidadVIP: 2
        })
        
        await bogota.save();
    } finally {
        mongoose.connection.close();
    }
});
