const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Direccion',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}`
    } catch (e) {
        return `No se pudo encontrar ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.7506898000, -74.000000)
//     .then(console.log)
//     .catch(console.log);