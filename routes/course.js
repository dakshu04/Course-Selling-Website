const { Router } = require("express")

const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
    // you would expect the user to pay you money
    res.json({
        message: "Your purchase endpoint"
    })
})

courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "Your preview endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
}