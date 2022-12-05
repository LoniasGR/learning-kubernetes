const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
let pong = 0;

app.get('/pingpong', (req, res) => {
  res.send(`PONG ${pong}`);
  pong += 1;
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
