const crypto = require('crypto');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
const file = 'timestamp.txt';

const uuid = crypto.randomUUID();

app.get('/status', (req, res) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.send(err);
    } else {
    const status = `${data}: ${uuid}`;
    res.send(status);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
