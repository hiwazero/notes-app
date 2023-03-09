const { default: chalk } = require("chalk");
const fs = require("fs");
// fs.writeFileSync('notes.txt', 'This is written via NodeJS !')
// fs.appendFileSync('notes.txt', 'This is appended using appendFileSync')
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        const notes = JSON.parse(dataJSON);
        return notes ;
    } catch (error) {
        return []
    }
};

const getNotes = (title) => {
  const notes = loadNotes()
  const findNote = notes.find((note) => note.title === title)

  if(findNote){
    console.log(chalk.bgGreen.red("Title: "+findNote.title), "body: "+findNote.body)
  }else{
    console.log(chalk.bgRedBright("No matching title found! "))
  }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON);
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const repeatList = notes.filter((note) => note.title === title)
    console.log(typeof(title))
    notes.push({title: title, body: body})

    if(repeatList.length === 0 ){
       saveNotes(notes)
    }else{
        console.log('REPETITION OF TITLE')
    }
};

const removeNote = (title) => {
    const notes = loadNotes()
    const removeList = notes.filter((note) => note.title !== title)
    saveNotes(removeList)
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    });
}


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  loadNotes: loadNotes,
  removeNote: removeNote,
  listNotes: listNotes
};
