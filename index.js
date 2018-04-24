const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static('public'));
//app.get('/', (req, res) => res.render('index.html'));

app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))