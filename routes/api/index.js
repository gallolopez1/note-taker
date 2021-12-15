const router = require('express').Router();
const notes = require('../../db/db.json');
// calling it as an object from note.js because we exported the functions as an object
const { addNote, deleteNote } = require('../../lib/note');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    const noteAdded = addNote(req.body, notes);
    res.json(noteAdded);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(req.body);
})



module.exports = router;