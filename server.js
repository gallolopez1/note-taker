const express = require('express');
const PORT = process.env.PORT || 3001;
const html = require('./routes/html/index');
const api = require('./routes/api/index');

const app = express();
// use throughout all files in public folder
app.use(express.static('public'));
// allows us to return the json format
app.use(express.json());
app.use('/api', api);
// when navigating to homepage, show index.html
app.use('/', html);

// console log when user hits server route
app.listen(PORT, () => {
    console.log(`HTML IS DONE`);
});