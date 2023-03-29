const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define("accounts", {
        login_id: {
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
        },
        owner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    return Account
}