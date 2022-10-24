const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3001;

//middleware
app.use(cors())
app.use(express.json())

//routers
const router = require("./routes/UserRoute")
app.use("/api/users", router)

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`))



