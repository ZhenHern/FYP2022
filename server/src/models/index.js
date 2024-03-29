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
    console.log("Error"+err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.accounts = require("./AccountModel.js")(sequelize, DataTypes)
db.users = require("./UserModel.js")(sequelize, DataTypes)
db.products = require("./ProductModel")(sequelize, DataTypes)
db.productsCategory = require("./ProductCategoryModel")(sequelize, DataTypes)
db.productsIngredient = require("./ProductIngredientModel")(sequelize, DataTypes)
db.itemCarts = require("./ItemCartModel")(sequelize, DataTypes)
db.items = require("./ItemModel")(sequelize, DataTypes)

db.users.belongsTo(db.accounts, {
    foreignKey: "login_id"
})
db.products.belongsTo(db.productsCategory, {
    foreignKey: "category_id"
})

db.productsIngredient.belongsTo(db.products, {
    foreignKey: "product_id"
})

db.itemCarts.belongsTo(db.users, {
    foreignKey: "user_id"
})

db.items.belongsTo(db.itemCarts, {
    foreignKey: "item_cart_id"
})

db.items.belongsTo(db.products, {
    foreignKey: "product_id"
})




db.sequelize.sync({ force: false })
.then(() => {
    console.log("Re-sync done");
})

module.exports = db