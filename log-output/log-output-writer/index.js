const express = require('express');

const app = express();
const port = 4000;

let status = new Date().toISOString();

setInterval(()=> {
  status = new Date().toISOString();
}, 5000);

app.get('/date', (req, res) => {
  res.send(status);
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
