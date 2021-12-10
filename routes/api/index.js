const router = require('express').Router();
const notes = require('../../db/db.json');
const addNote = require('../../lib/note');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    const noteAdded = addNote(req.body, notes);
    res.json(noteAdded);
})

module.exports = router;