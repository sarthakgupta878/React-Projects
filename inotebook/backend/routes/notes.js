const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator')
const router = express.Router();


router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be 5 characters long').isLength({ min: 5 }),

], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // console.log(req.user)
        const { title, description, tag } = req.body
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save();

        res.json(saveNote)
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})


module.exports = router