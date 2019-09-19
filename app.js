const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lon);

        return `La temperatura en: ${coors.direccion.blue} es de ${colors.green(temp + 'ºC')}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }

};


getInfo(argv.direccion)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));