const yargs = require("yargs");
const { hideBin } = require ("yargs/helpers");
const { addFilm, listAll, listName, updateFilm, deleteFilm, deleteAll } = require("./movies/movieMethods");
const argv = yargs(hideBin(process.argv)).argv;

const App = async () => {
    if (argv.add) {
        const filmObj = {
            name: argv.name,
            genre: argv.genre,
            actor: argv.actor,
            rating: argv.rating,
        }
        await addFilm(filmObj)
    }
    else if (argv.list) {
        await listAll()
    }
    else if (argv.listName) {
        await listName()
    }
    else if (argv.update) {
        await updateFilm()
    }
    else if (argv.delete) {
        await deleteFilm()
    }
    else if (argv.deleteAll) {
        await deleteAll()
    }
    else {
        console.log("Wrong command")
    }
};

App();