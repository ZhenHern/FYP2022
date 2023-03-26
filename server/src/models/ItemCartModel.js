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
        status: {
            type: DataTypes.STRING,
            defaultValue: "Preparing"
        },
        orderedAt: {
            type: DataTypes.DATE
        }
    })

    return ItemCart
}