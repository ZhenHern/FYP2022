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
        product_description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.BLOB("long")
        },
        product_category: {
            type: DataTypes.INTEGER
        }
    })

    return Product
}