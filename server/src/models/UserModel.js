module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    })

    return User
}