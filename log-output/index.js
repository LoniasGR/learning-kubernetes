const crypto = require('crypto');

const uuid = crypto.randomUUID();

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${uuid}`);
}, 5000)
