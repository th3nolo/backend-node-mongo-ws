//const express = require('express');
// No se require usar expres, porque la instancia de express esta usando este archivo para las rutas, en server.js 

const message = require('../components/message/network');

const routes = function (server) {
    //app.use(router);
    // cuando usamos server estamos refiriendonos a la instancia de express que esta en server, por lo tanto es como usar app.use router, pero en este caso le pasamos la ruta 
    server.use('/message', message )   
};

module.exports = routes;