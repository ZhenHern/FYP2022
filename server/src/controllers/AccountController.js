const db = require("../models")
const crypto = require("crypto")
const nodemailer = require("nodemailer")

const Account = db.accounts
const User = db.users

const createAccount = async (req, res) => {
    let accountInfo = {
        email: req.body.email,
        password: req.body.password,
        token: crypto.randomBytes(32).toString("hex"),
    }

    try {
        const account = await Account.create(accountInfo)
        await User.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            login_id: account.login_id,
        })
        res.status(200).send(account)
        sendVerificationLink(accountInfo.email, accountInfo.token);
    }
    catch(err) {
        res.status(400).send("Your email is taken")
    }
}

const checkEmail = async (req, res) => {
    let email = req.body.email
    const count = await Account.count({ where: { email: email}})

    if (count != 0) res.status(400).send("This email is already in use.")
}

const login = async (req, res) => {
    let accountInfo = {
        email: req.body.email,
        password: req.body.password,
    }


    if (!(await Account.count({ where: { email: accountInfo.email}}))) {
        res.status(400).send("A user with this email does not exist!")
        return
    }
    const account = await Account.findOne({ where: {email: accountInfo.email}})
    if (accountInfo.password != account.password) {
        res.status(400).send("The password does not match with the email!")
        return
    }
    if (!account.verified) {
        res.status(400).send("Please verify your email first before trying to log in!")
        return
    }
    account.logged_in = true
    await account.save()
}

const verifyEmail = async (req, res) => {
    let token = req.params.token
    const account = await Account.findOne({ where: { token: token}})

    if (account) {
        account.verified = true
        await account.save()
        res.json("Your email is successfully verified. Please try to log in!")
    }
    else {
        res.json("Error, account not found!")
    }
}

const sendVerificationLink = async (email, token) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
          user: "bakeryshopfyp@gmail.com", // generated ethereal account
          pass: "vmayyyabirjgkwwf", // generated ethereal password
        },
      });

      const msg = {
        from: '"ZH Bakery Shop" <foo@example.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Verify your email!", // Subject line
        html: `Click <a href=http://localhost:3001/api/users/verify/${token}> here </a> to verify your email.`
      }
    
      // send mail with defined transport object
      let info = await transporter.sendMail(msg)

    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

const resendVerificationLink = async (req, res) => {
    
    const email = req.body.email
    const account = await Account.findOne({ where: { email: email}})

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: "bakeryshopfyp@gmail.com", // generated ethereal account
            pass: "vmayyyabirjgkwwf", // generated ethereal password
        },
    });

    const msg = {
        from: '"ZH Bakery Shop" <foo@example.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Verify your email!", // Subject line
        html: `Click <a href=http://localhost:3001/api/users/verify/${account.token}> here </a> to verify your email.`
    }
    
    // send mail with defined transport object
    let info = await transporter.sendMail(msg)

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
}


module.exports = {
    createAccount,
    checkEmail,
    verifyEmail,
    resendVerificationLink,
    login
}