const express = require('express');

const app = express();

app.set('view engine', 'pug');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', { title: 'My TODO list', message: 'Hello there!' });
});

app.listen(port, () => {
  console.debug(`Server started on port ${port}`);
});
