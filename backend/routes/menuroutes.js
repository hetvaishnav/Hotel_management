const express = require('express')
const dotenv = require("dotenv");
dotenv.config()
const router = express.Router();
const Menu=require('../models/menumodel.js')

router.post('/addmenu', async (req, res) => {
    const { date, meals } = req.body;

    try {
        const menu = new Menu({ date, meals });
        await menu.save();
        res.status(201).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/getmenu', async (req, res) => {
    try {
        const menus = await Menu.find().sort({ date: -1 });
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete menu by ID
router.delete('/getmenu/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const menu = await Menu.findByIdAndDelete(id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        res.json({ message: 'Menu deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;