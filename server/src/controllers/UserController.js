const db = require("../models")

const User = db.users

// const createAccount = async (req, res) => {
//     let info = {
//         email: req.body.email,
//         password: req.body.password
//     }

//     try {
//         const user = await User.create(info)
//         res.status(200).send(user)
//     }
//     catch(err) {
//         res.status(400).send("Your email is taken")
//     }

// }

const checkEmail = async (req, res) => {
    let email = req.body.email;
    const count = await User.count({ where: { email: email}})

    if (count != 0) res.status(400).send("This email is already in use.");


    
}

module.exports = {
    // createAccount
    checkEmail
}