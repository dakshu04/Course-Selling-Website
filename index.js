require("dotenv").config();
const express = require('express')
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express();
app.use(express.json()); //this middleware is needed when user send some request with json data

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/course", courseRouter)

async function main() {
    //use dotenv to provide environment variable in seperate file
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to MongoDB")
    }).catch(err => {
        console.log("Failed to connect to MongoDB", err);
    })
    app.listen(3000)
    console.log("listening on port 3000");
    
}
main();
