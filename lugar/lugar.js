const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${direccion}&appid=ec4709acd37c853f78228c78d674cb1b&units=metric`)
    if (resp.cod === '404') {
        throw new Error(`No hay resultados para la dirección ${direccion}`);
    }

    let coord = resp.data.coord;

    return {
        direccion: `${resp.data.name},${resp.data.sys.country}`,
        lon: coord.lon,
        lat: coord.lat
    }
}

module.exports = {
    getLugarLatLng
}