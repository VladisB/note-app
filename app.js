console.log('app.js');

const yargs = require('yargs');
const notes = require('./notes');

console.log(yargs.argv);

let title = yargs.argv.title;
let body = yargs.argv.body;
let command = yargs.argv._[0];

if(command === "add"){
	console.log('adding note');
	notes.addingNote(title, body);
} else if(command === "remove"){
	console.log('remove note');
	notes.removeNote(title);
} else if(command === "read"){
	console.log('read note');
	notes.readNote(title);
} else if(command === "list"){
	console.log('list note');
	notes.getAll();
} else{
	console.log('Unknown command was used!');
}
