const db = require("../models")

const User = db.users

const createAccount = async (req, res) => {
    let info = {
        email: req.body.email,
        password: req.body.password
    }

    try {
        const user = await User.create(info)
        res.status(200).send(user)
    }
    catch(err) {
        res.status(400).send("Your email is taken")
    }

}

module.exports = {
    createAccount
}