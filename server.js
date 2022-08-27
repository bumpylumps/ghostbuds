//import required packages
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mainRoutes = require('./routes/main')
const PORT = 8300

//import .env
require('dotenv').config({path: './config/.env'})

//set views and public
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//set index GET
app.use('/', mainRoutes)


//set listener
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})