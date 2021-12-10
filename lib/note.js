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

module.exports = addNote;