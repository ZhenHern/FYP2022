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
            type: DataTypes.STRING
        },
        image_name1: {
            type: DataTypes.STRING
        },
        image1: {
            type: DataTypes.BLOB("long")
        },
        image_name2: {
            type: DataTypes.STRING
        },
        image2: {
            type: DataTypes.BLOB("long")
        },
        image_name3: {
            type: DataTypes.STRING
        },
        image3: {
            type: DataTypes.BLOB("long")
        }
    })

    return Product
}