const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post('/createuser', [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('password', 'Password must be 5 characters long').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        res.json(user)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router