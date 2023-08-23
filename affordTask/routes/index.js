const router = require("express").Router()
const {NumberController} = require("../controllers/index")


router.get("/numbers", NumberController)


module.exports = router