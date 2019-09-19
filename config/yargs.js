const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirreccion de la ciudad para obtener su clima',
        demand: true
    }
}).argv

module.exports = {
    argv
}