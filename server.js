//import required packages
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require("./config/database");
const mainRoutes = require('./routes/main')
const locationsRoutes = require('./routes/locations')
const scheduleRoutes = require('./routes/schedule')
const teamRoutes = require('./routes/team')
const aboutRoutes = require('./routes/about')

const PORT = 8300

//Use .env file in config folder
require('dotenv').config({path: './config/.env'})


//Connect to Database
connectDB();



//Using EJS for views
app.set('view engine', 'ejs')


//Static Folder
app.use(express.static('public'))

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//setup listening routes
app.use('/', mainRoutes)
app.use('/locations', locationsRoutes)
app.use('/schedule', scheduleRoutes)
app.use('/team', teamRoutes)
app.use('/about', aboutRoutes)




//set listener
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})