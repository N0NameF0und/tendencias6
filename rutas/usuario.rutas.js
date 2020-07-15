const {request} = require('../setup/app.js')
;

'use strict'

const express = require('express'),
    usuarioControl = require('../controles/usuario.control')

let api = express.Router()





//ENDPINT

api.get('/prueba' ,usuarioControl.prueba)

module.exports = api
