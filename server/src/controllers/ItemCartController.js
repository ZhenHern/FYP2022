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
        if (itemCart == null) {
            await createCart(req.params.userID)
        }
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

const addQuantity = async(req, res) => {
    try {
        item = await Item.findOne({
            where: {
                item_id: req.body.itemID
            }
        })
        item.set({
            quantity: item.dataValues.quantity + 1
        })
        await item.save()
        res.send("Successfully added quantity by 1")
    }
    catch(err) {
        res.send(err)
    }
}

const subtractQuantity = async(req, res) => {
    try {
        item = await Item.findOne({
            where: {
                item_id: req.body.itemID
            }
        })

        if (item.dataValues.quantity == 1) {
            await Item.destroy({
                where: {
                    item_id: req.body.itemID
                }
            })
            res.send("Item is removed from cart")
        }
        else {
            item.set({
                quantity: item.dataValues.quantity - 1
            })
            await item.save()
            res.send("Successfully subtract quantity by 1")
        }
    }
    catch(err) {
        res.send(err)
    }
}

const removeItem = async(req, res) => {
    try {
        await Item.destroy({
            where: {
                item_id: req.body.itemID
            }
        })
        res.send("Item is removed from cart")
    }
    catch(err) {
        res.send(err)
    }
}

const completeOrder = async(req, res) => {
    try {
        itemCart = await ItemCart.findOne({
            where: {
                item_cart_id: req.body.itemCartID
            }
        })
        itemCart.set({
            paid: 1,
            subtotal: req.body.subtotal,
            orderedAt: req.body.orderedAt
        })
        await itemCart.save()
        res.send("Order is completed")
    }
    catch(err) {
        res.send(err)
    }
}

const showPaidOrders = async(req, res) => {
    try {
        itemCart = await ItemCart.findAll({
            where: {
                user_id: req.params.userID,
                paid: 1
            },
            order: [
                ['updatedAt', 'DESC']
            ]
        })
        res.send(itemCart)
    }
    catch (err) {
        res.send(err)
    }
}

const showAllPaidOrders = async(req, res) => {
    try {
        orders = await ItemCart.findAll({
            where: {
                paid: 1
            },
            order: [
                ['orderedAt', 'DESC']
            ]
        })
        res.send(orders)
    }
    catch (err) {
        res.send(err)
    }
}



module.exports = {
    addToCart,
    createCart,
    getCurrentCart,
    showAllItems,
    addQuantity,
    subtractQuantity,
    removeItem,
    completeOrder,
    showPaidOrders,
    showAllPaidOrders
}