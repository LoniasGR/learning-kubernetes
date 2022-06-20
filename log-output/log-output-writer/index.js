const fs = require('fs');

const filename = "data/timestamp.txt";

setInterval(()=> {
  const status = new Date().toISOString();
  fs.writeFile(filename, status, {flag: 'w+'}, err => {
    if (err) {
      console.error(err);
    } else {
      console.debug(`Wrote ${status}`)
    }
  });
}, 5000);
