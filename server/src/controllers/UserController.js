const db = require("../models")
const nodemailer = require("nodemailer")

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

const sendVerificationLink = async (req, res) => {
    const {email} = req.body
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
          user: "bakeryshopfyp@gmail.com", // generated ethereal user
          pass: "vmayyyabirjgkwwf", // generated ethereal password
        },
      });

      const msg = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
      }
    
      // send mail with defined transport object
      let info = await transporter.sendMail(msg)

    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.send("Email sent!")
}

module.exports = {
    // createAccount
    checkEmail,
    sendVerificationLink
}