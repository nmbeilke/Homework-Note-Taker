// Imports
const router = require('express').Router()
const store = require('../db/store')

// Get request for /api/notes, calls function for fetch request show all notes from database
router.get('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes) => {
    })
    .catch((err) => res.status(500).json(err))
})

//Post request to take in new note
router.post('/notes', (req, res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
})

//Delete request for note with id in params

router.delete('/notes/:id', (req, res) => {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ok:true}))
    .catch((err) => res.status(500).json(err))
})

//Exports
module.exports = router