'use strict'

const express = require('express'),
      bodyParser = require('body-parser'),
      usuarioRutas = require('../rutas/usuario.rutas')

let app = express()

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json)

//CORS

//SESSIONS

//PASSPORTS

//RUTAS

app.use('/api',usuarioRutas)

module.exports = app





