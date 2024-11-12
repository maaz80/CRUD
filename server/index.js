const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

// Mongo Db url 
mongoose.connect("mongodb://127.0.0.1:27017/crud")

// To get Users 
app.get('/', (req, res) => {
    userModel.find({})
        .then(users => res.json(users))
        .catch(err => { res.json(err) })
})

// Get User with id 
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => { res.json(err) })
})

// Update user Details 
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => { res.json(err) })
})

// Delete user 
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({ _id: id })
        .then(users => res.json(users))
        .catch(err => { res.json(err) })
})

// Add User 
app.post("/create", (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// Port 
app.listen(3001, () => {
    console.log('Server is running');
})