const crypto = require('crypto');
const express = require('express');

const app = express();
const port = 3000;

const uuid = crypto.randomUUID();
let status;
setInterval(() => {
  status = `${new Date().toISOString()}: ${uuid}`;
  console.log(status);
}, 5000);

app.get('/status', (req, res) => {
  res.send(status);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
