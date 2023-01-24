const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const englishMenu = require('../englishMenu')
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// Simple routes
app.get('/', (req, res) => {
    const englishItems = englishMenu.listApps();
    res.send(englishItems)
})