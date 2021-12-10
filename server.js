const express = require('express');
const PORT = process.env.PORT || 3001;
const html = require('./routes/html');

const app = express();
app.use(express.static('public'));

app.use('/', html);

app.listen(3001, () => console.log(`API IS DONE`));