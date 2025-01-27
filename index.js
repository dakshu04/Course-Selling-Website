const express = require('express')
const app = express()
const port = 3000

app.post('/user/signup', (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.post('/user/signin', (req, res) => {
    res.json({
        message: "signin endpoint"
    })
})

app.get('/user/purchases', (req, res) => {
    res.json({
        message: "user/purchases"
    })
})

app.post('/course/purchase', (req, res) => {
    //you would expect the user to pay you money
    res.json({
        message: "course/purchases"
    })
})

app.get('/courses', (req, res) => {
    res.json({
        message: "courses"
    })
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})