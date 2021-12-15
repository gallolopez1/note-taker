const fs = require('fs');
const path = require('path');
const uuid = require('../helpers/uuid');

function addNote(body, array) {
    if (!body.id) {
        body.id = uuid();
    }
    array.push(body);
    console.log(array);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(array), err => {
        err ? console.log(err) : console.log("Add Notes");
    })
    return body;
}

function deleteNote(id, note) {
    let indexID = note.map(x => { return x.id }).indexOf(id);
    note.splice(indexID, 1);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(note), err => {
        err ? console.log(err) : console.log("Deleted Notes");
    })
}

module.exports = {
    addNote,
    deleteNote
};