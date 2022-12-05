const crypto = require('crypto');
const express = require('express');

const app = express();
const port = 3000;

const uuid = crypto.randomUUID();

app.get('/status', async (req, res) => {
  const timestamp = await fetch('http://localhost:4000/date').then(res => res.text());
  const pongs = await fetch('http://pingpong:3000/pingpong').then(res => res.text());

  const status = `<p>${timestamp}: ${uuid}<br>Ping \\ Pongs: ${pongs}</p>`;
  res.send(status);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
