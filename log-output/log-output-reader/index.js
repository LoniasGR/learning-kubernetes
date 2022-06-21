const crypto = require('crypto');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
const timestampFile = 'data/timestamp.txt';
const pingpongFile = 'data/pingpong.txt';

const uuid = crypto.randomUUID();

app.get('/status', (req, res) => {
  fs.readFile(timestampFile, 'utf-8', (err1, timestamp) => {
    if (err1) {
      res.send(err1);
    } else {
      fs.readFile(pingpongFile, 'utf-8', (err2, pongs) => {
        if (err2) {
          res.send(err2);
        } else {
          const status = `<p>${timestamp}: ${uuid}<br>Ping \\ Pongs: ${pongs}</p>`;
          res.send(status);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
