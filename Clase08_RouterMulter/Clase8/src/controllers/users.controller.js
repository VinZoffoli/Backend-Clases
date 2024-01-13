const express = require('express');
const router = express.Router();
const users = []

app.get('/api/users', (req, res) => {
    res.json({payload: users})
})

app.get('/api/users/:id', (req, res) => {
    const {id} = req.params
    const user = users.find(user => user.id === req.params.id)
    res.json({payload: user})
})

app.post('(api/users', (req, res) => {
    const {name, lastname, email} = req.body
    const newUserInfo = {
        name,
        lastname,
        email,
    }
    
    user.push()
    res.json({payload: users})
})