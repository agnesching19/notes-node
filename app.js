console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.add(3, -5);
console.log(res);

// let user = os.userInfo();

// // Option one
// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });

// Option two
// fs.appendFileSync('greeting.txt', 'Bello World!');

