const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define("product_categories", {
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category_name: {
            type: DataTypes.STRING,
            unique: true
        },
    })

    return ProductCategory
}