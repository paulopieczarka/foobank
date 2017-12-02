const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true},
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    number: { type: String, unique: true, default: shortid.generate },
    balance: { type: Number, default: 0 }
});

AccountSchema.method("update", function (updates, callback) {
    Object.assign(this, updates, { updatedAt: new Date() });
    this.parent().save(callback);
});

module.exports = mongoose.model("Account", AccountSchema);