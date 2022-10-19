const express = require("express")
const cors = require("cors")
const loginRoute = require("./routes/UserRoute")

var corOptions = {
    origin: "https://localhost:3031"
}

const app = express()
const PORT = 3001;

//middleware
app.use(cors(corOptions))
app.use(express.json())

//routers
const router = require("./routes/UserRoute")
app.use("/api/users", router)

app.use('',loginRoute)

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`))



