const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'kskalnasjaslbas';

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
        const salt = await bcrypt.genSalt(10);
       const secPass = await bcrypt.hash(req.body.password,salt)
        let user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        const data = {
            user:{
                id: user._id
            }
        }
      const authToken =  jwt.sign(data, JWT_SECRET);
    

        res.json({authToken})
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.post('/login', [
   
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'password cannot be blank').exists(),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"try to login with correct Credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"try to login with correct Credentials"});
        }

        const data = {
            user:{
                id:user._id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        res.json({authToken})
    }
    catch(err){
        res.status(500).json({ error: "Internal Server Error" })

    }
})
router.post('/getuser', fetchuser,async (req, res) => {

try{
    let userId= req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
}
catch(err){
    res.status(500).send("Internal Server Error ")
}
})

module.exports = router