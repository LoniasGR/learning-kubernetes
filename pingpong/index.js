const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
const filename = 'data/pingpong.txt';
let pong = 0;

app.get('/pingpong', (req, res) => {
  res.send(`PONG ${pong}`);
  fs.writeFile(filename, pong, {flag: 'w+'}, err => {
    if (err) {
      console.error(err);
    } else {
      console.debug(`Wrote pong=${pong}`);
    }
  });
  pong += 1;
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
