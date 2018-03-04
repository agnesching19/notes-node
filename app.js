console.log('Starting app.js');

// 3rd party modules
const fs = require('fs');
const _ = require('lodash');
// From my own files
const notes = require('./notes.js');

let command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognised');
}
