const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3001;

//middleware
app.use(cors())
app.use(express.json())

//routers
const accountRouter = require("./routes/AccountRoute")
const productRouter = require("./routes/ProductRoute")
const itemCartRouter = require("./routes/ItemCartRoute")
app.use("/api/users", accountRouter)
app.use("/api/products", productRouter)
app.use("/api/itemCarts", itemCartRouter)

app.listen(process.env.PORT || PORT, () => console.log(`Running express server on Port ${PORT}!`))



