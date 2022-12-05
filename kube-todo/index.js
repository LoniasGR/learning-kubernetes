const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

const port = process.env.PORT || 3000;
const imgURL = 'https://picsum.photos/1200';
const imgPath = './public/image.jpeg';

async function pullImage() {
  fs.stat(imgPath, (err, stats) => {
    if (err) {
      console.error(err);
    }
    if (!fs.existsSync(imgPath)
    || (Date.now() - Date.parse(stats.mtime)) / (1000 * 60 * 60 * 24) > 1) {
      axios({
        url: imgURL,
        method: 'GET',
        responseType: 'stream',
      })
        .then((res) => {
          res.data.pipe(fs.createWriteStream(imgPath));
        });
    }
  });
}

setInterval(() => {
  pullImage();
}, 1000 * 60 * 60 * 24);

app.get('/', (req, res) => {
  res.render('index', { subject: 'My TODO list', image: 'http://localhost:8081/image-of-the-day' });
});

app.get('/image-of-the-day', (req, res) => {
  res.sendFile(path.join(__dirname, imgPath));
});

app.listen(port, () => {
  pullImage();
  console.debug(`Server started on port ${port}`);
});
