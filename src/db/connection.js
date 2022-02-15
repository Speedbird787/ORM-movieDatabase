const { Sequelize } = require ("sequelize");
require("dotenv").config();

let sequelize = new Sequelize (process.env.MYSQL_URI);

// first way to check connection

// sequelize.authenticate().then(()=>{
//     console.log('connected to db')
// }) .catch((err)=>{
//     console.log(err)
// })

//or  this way to check the connection

// let connection = async() =>{
//     try {
//         await sequelize.authenticate()
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// connection ()

module.exports = sequelize;

