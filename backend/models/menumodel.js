const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    meals: [
        {
            name: String,
        },
    ],
});
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;