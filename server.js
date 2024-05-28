const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/blogposts', (req, res) => {
    res.json(require('./data/blogposts.json'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
