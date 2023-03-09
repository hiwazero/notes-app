const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// const getNote = require('./notes.js')
// console.log(chalk.blue.bgRed.bold(getNote()))
// console.log(yargs.argv)

yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Title = '+argv.title, ' Body = '+argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing of all notes',
    handler: function () {
        console.log(chalk.red('Your list of Notes! '))
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Find title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.getNotes(argv.title)
    }
})


yargs.parse()
// console.log(yargs.argv)