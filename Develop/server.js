// Imports
const express = require('express')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

//Declations
const app = express()
const PORT = process.env.PORT || 3001

//Body parsing, use of static public folder and middleware for routing
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(express.static('public'))
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//Start server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))