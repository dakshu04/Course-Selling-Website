const { Router } = require("express")
const { userModel } = require("../db")  
const userRouter = Router();
const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "aladld123"

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body //TODO: Add Zod Validation
    //TODO: hash the password so plain text password is not stored in the DB

    //TODO: Put inside the try catch block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup succeeded"
    })
})

userRouter.post("/signin",async function(req, res) {
    const { email, password } = req.body;

    //TODO: ideally password should be hashed, and hence you cant compare the user provided and the database password

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if(user) {
        const token = jwt.sign({ 
            id: user._id
        }, JWT_USER_PASSWORD)
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

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}
