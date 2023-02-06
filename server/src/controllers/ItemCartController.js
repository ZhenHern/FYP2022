const db = require("../models")

const ItemCart = db.itemCarts
const Item = db.items

const createCart = async(userID, res) => {
    try {
        itemCart = await ItemCart.create({
            user_id: userID,
            paid: false
        })
        console.log("Created a new item cart")
        return itemCart
    }
    catch(err) {
        console.log("Error creating new item cart")
        return 
    }
}

const addToCart = async(req, res) => {
    var itemCartID = null
    const userID = req.body.userID

    //Create a new item cart if there is no usable one
    const query = await ItemCart.findOne({
        where: {
            user_id: userID,
            paid: false
        }
    })

    if (query == null) {
        itemCartID = createCart(userID)
    } 
    else {
        itemCartID = query.dataValues.item_cart_id
    }

    try {
        await Item.create({
            quantity: req.body.quantity,
            product_id: req.body.productID,
            item_cart_id: itemCartID
        })
        console.log("Added item into cart")
        res.send("Successfully added item")
    }
    catch(err) {
        console.log(err)
        res.send("Fail to add item")
    }
}



module.exports = {
    addToCart,
    createCart
}