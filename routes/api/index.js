const router = require('express').Router();
const notes = require('../../db/db.json');
const addNote = require('../../lib/note');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    addNote(req.body, notes);
})

module.exports = router;