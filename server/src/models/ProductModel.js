const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("products", {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_name: {
            type: DataTypes.STRING,
        },
        product_price: {
            type: DataTypes.DECIMAL(10,2)
        },
        product_description: {
            type: DataTypes.TEXT('long')
        },
        image_name1: {
            type: DataTypes.STRING
        },
        image_name2: {
            type: DataTypes.STRING
        },
        image_name3: {
            type: DataTypes.STRING
        },
    })

    return Product
}