const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const ProductIngredient = sequelize.define("product_ingredients", {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ingredient_name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
    })

    return ProductIngredient
}