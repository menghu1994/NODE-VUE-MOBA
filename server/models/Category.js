const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String }
})

module.export = mongoose.model('Category', schema)