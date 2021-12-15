//Imports
const path = require('path')
const router = require('express').Router()

//Sends the notes.html file when the /notes url is used
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//Sends the homepage for any other url
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Exports
module.exports = router