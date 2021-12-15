//Imports
const util = require('util')
const fs = require('fs')
const uuidv1 = require('uuid')
const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.readFile)

// Class for store functions
class Store {
    read() {
        return readFilePromise('db/db.json', 'utf8')
    }

    write(note) {
        return writeFilePromise('db/db.json', JSON.stringify(note))
    }

    //Get notes list
    getNotes() {
        let parsedNotes
        return this.read().then((notes) => {    
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err) {
                parsedNotes = []
              }
        
              return parsedNotes
            })
          }

//Make sure new note isn't blank
//Assign unique id to a new note
//Get notes list, add new note and return it
    addNote(note) {
        const {title,text} = note
if (!title || text) {
    throw new Error("The title and text of your note cannot be blank")
}

        const newNote = {title,text, id:uuidv1()}

        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)
    }

    //Get all notes list, remove one with the id provided and return new list
    removeNote(id) {
        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes))
    }
}

//Exports
module.exports = new Store()
