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
        subtotal: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: 0
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
        },
        orderedAt: {
            type: DataTypes.DATE
        }
    })

    return ItemCart
}