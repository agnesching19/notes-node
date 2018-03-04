console.log('Starting app.');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

// Option one
fs.appendFile('greeting.txt', `Hello ${user.username}!`, function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
});

// Option two
// fs.appendFileSync('greeting.txt', 'Bello World!');

