const { Router } = require("express")
const { adminModel } = require("../db")
const adminRouter = Router();
const JWT_ADMIN_PASSWORD = "aladld121231233"
const jwt = require("jsonwebtoken")

adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body //TODO: Add Zod Validation
    //TODO: hash the password so plain text password is not stored in the DB

    //TODO: Put inside the try catch block
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }) 
    res.json({
        message: "signup succeeded"
    })
})

adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    //TODO: ideally password should be hashed, and hence you cant compare the user provided and the database password

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if(admin) {
        const token = jwt.sign({ 
            id: admin._id
        }, JWT_ADMIN_PASSWORD)
        //Do cookie base authentication - alternative to token base authentication
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }

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