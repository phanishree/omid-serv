const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(80, function () {
  console.log('Local web server is running on port 80!');
});