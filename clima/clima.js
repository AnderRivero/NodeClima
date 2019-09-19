const axios = require('axios');

const getClima = async(lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ec4709acd37c853f78228c78d674cb1b&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}