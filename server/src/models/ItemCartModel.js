const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const ItemCart = sequelize.define("item_cart", {
        item_cart_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        paid: {
            type: DataTypes.BOOLEAN,
        },
    })

    return ItemCart
}