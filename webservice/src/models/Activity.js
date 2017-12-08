const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true},
    user: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    message: String,
    icon: String
});

module.exports = mongoose.model("Activity", ActivitySchema);