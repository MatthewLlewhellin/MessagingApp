const express = require("express");
const app = require('express')();

app.use(express.json())

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})

app.get('/register', (req, res) => {
    res.status(200).send({
        hello: "yes"
    })
})

app.post('/register', (req, res) => {
    res.json('yes')
})