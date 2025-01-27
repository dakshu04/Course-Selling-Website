const { Router } = require("express")

const adminRouter = Router();

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.put("/course", function(req, res) { //put for create a course, update the price/course
    res.json({
        message: "signin endpoint"
    })
})


adminRouter.put("/course", function(req, res) { //put for create a course, update the price/course
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.get("/course/bulk", function(req, res) { //give me all the course that I have created
    res.json({
        message: "signin endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}