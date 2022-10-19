const dbConfig = require("../../dbConfig")

const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
)

sequelize.authenticate()
.then(() => {
    console.log("Connected..")
})
.catch(err => {
    console.log("Error"+error)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("./UserModel.js")(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log("Re-sync done");
})

module.exports = db