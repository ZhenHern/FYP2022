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
app.use("/api/users", accountRouter)
app.use("/api/products", productRouter)

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`))



