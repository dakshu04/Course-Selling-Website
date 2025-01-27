const express = require('express')
const { userRouter } = require("./routes/user")
const { createCourseRoutes } = require("./routes/course")
const app = express();

app.use("/user", userRouter)
app.use("course", createCourseRoutes)

createUserRoutes(app);
createCourseRoutes(app);

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})