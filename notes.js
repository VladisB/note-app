const fs = require('fs');
const textFile = 'notes.txt';

const fetchNotes = () => {
	try{
		return JSON.parse(fs.readFileSync(textFile));
	}catch(err){
		return [];
	}
};
const addingNote = (title, body) => {
	let notes = fetchNotes();

	const note = {title, body};
	let double = notes.filter((note) => note.title === title);
	if(double.lenght === 0){
		notes.push(note);
		fs.writeFileSync(textFile, JSON.stringify(notes));
		logNote(note);
	}else{
		console.log('STOP: Title already exsist');
	}
};
const removeNote = (title) => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter((note) => note.title !== title);

	fs.writeFileSync(textFile, JSON.stringify(filteredNotes));
};
const readNote = (title) => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter((note) => note.title === title);
	logNote(filteredNotes[0]);
};
const getAll = () => {
	let notes = fetchNotes();
	notes.forEach(note => {
		logNote(note);
	});
};

const logNote = (note) =>{
	console.log(`*****************`);
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = {addingNote, removeNote, readNote, getAll};