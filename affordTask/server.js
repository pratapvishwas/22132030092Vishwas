const express = require("express")
const app = express()
const router = require("./routes/index")

app.use(express.json())


app.use(router)

app.listen(8008, ()=> {
    console.log("SErver is listening...")
})