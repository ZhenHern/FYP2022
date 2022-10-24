const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        token: {
            type: DataTypes.STRING
        }
    })

    return User
}