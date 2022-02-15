const Film = require ("./movieModel");
const yargs = require("yargs");
const { hideBin } = require ("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync()
        await Film.create(filmObj)
    } catch (error) {
        console.log (error)
        
    }
}

exports.listOfMovies = async () => {
    try {
        const readList = await Film.findAll({
            attributes: ["name"]
        })
        console.log(readList)
    }
    catch (error) {
        console.log(error)
    }
};

exports.updateFilm = async () => {
    try {
        if (argv.newname) {
            const updateResult = await Film.update(
                { name: argv.newname }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s have been updated to name "${argv.newname}"`)
        }
        else if (argv.newgenre) {
            const updateResult = await Film.update(
                { genre: argv.newgenre }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s have been updated to genre "${argv.newgenre}"`)
        }
        else if (argv.newactor) {
            const updateResult = await Film.update(
                { actor: argv.newactor }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s updated the actor to "${argv.newactor}"`)
        }
        else if (argv.newrating) {
            const updateResult = await Film.update(
                { rating: argv.newrating }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s updated the rating to "${argv.newrating}"`)
        }
    }
    catch (error) {
        console.log(error)
    }
};

exports.deleteAll = async () => {
    try {
        const deleteMovies = await Film.destroy({
            truncate: true
        })
        console.log(deleteMovies)
        console.log("All movies have been deleted")
    }
    catch (error) {
        console.log(error)
    }
};

exports.deleteFilm = async () => {
    try {
        if (argv.name) {
            const deleteMovies = await Film.destroy({
                where: {
                    name: argv.name
                }
            })
            console.log(`${deleteMovies} movie/s deleted named "${argv.name}"`)
        }
        else if (argv.genre) {
            const deleteMovies = await Film.destroy({
                where: {
                    genre: argv.genre
                }
            })
            console.log(`${deleteMovies} movie/s deleted with genre "${argv.genre}"`)
        }
        else if (argv.actor) {
            const deleteMovies = await Film.destroy ({
                where: {
                    actor: argv.actor
                }
            })
            console.log(`${deleteMovies} movie/s deleted with actor ${argv.actor}`)
        }
        else if (argv.rating) {
            const deleteMovies = await Film.destroy ({
                where: {
                    rating: argv.rating
                }
            })
            console.log(`${deleteMovies} movie/s deleted with rating "${argv.rating}"`)
        }
    }
    catch (error) {
        console.log(error)
    }
};
