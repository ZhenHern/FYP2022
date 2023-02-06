const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("item", {
        item_id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
        product_id: {
            type: DataTypes.INTEGER,
        },
        item_cart_id: {
            type: DataTypes.INTEGER
        }
    })

    return Item
}