const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        title: {type: String, require: true, unique : true},
        genre: {type: String, },
        type: {type: String, },
        context: {type: Array}
    },
    {timestamps: true}
)

module.exports = mongoose.model("List", ListSchema)