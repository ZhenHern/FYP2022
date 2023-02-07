const db = require("../models")

const ItemCart = db.itemCarts
const Item = db.items

const createCart = async(userID) => {
    try {
        itemCart = await ItemCart.create({
            user_id: userID,
            paid: false
        })
        console.log("Created a new item cart")
        return itemCart.dataValues.item_cart_id
    }
    catch(err) {
        console.log(err)
        return 
    }
}

const getCurrentCart = async(req, res) => {
    try {
        itemCart = await ItemCart.findOne({
            where: {
                user_id: req.params.userID,
                paid: false
            }
        })
        res.send(itemCart.dataValues)
    }
    catch(err) {
        res.send(err)
    }
}

const showAllItems = async(req, res) => {
    try {
        items = await Item.findAll({
            where: {
                item_cart_id: req.params.itemCartID
            }
        })
        res.send(items)
    }
    catch(err) {
        res.send(err)
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
        itemCartID = await createCart(userID)
    } 
    else {
        itemCartID = query.dataValues.item_cart_id
    }

    const selectedItem = await Item.findOne({
        where: {
            item_cart_id: itemCartID,
            product_id: req.body.productID
        }
    })

    if (selectedItem == null) {
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
    else {
        selectedItem.set({
            quantity: selectedItem.dataValues.quantity + req.body.quantity
        })
        await selectedItem.save()
        res.send("Saved new quantity")
    }

    
}



module.exports = {
    addToCart,
    createCart,
    getCurrentCart,
    showAllItems
}