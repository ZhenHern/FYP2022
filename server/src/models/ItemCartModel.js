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
            type: DataTypes.BOOLEAN
        },
        prepared: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        collected: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        cancelled: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0   
        }
    })

    return ItemCart
}