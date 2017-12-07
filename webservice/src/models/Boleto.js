const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const BoletoSchema = new Schema({
    _id: { type: String, unique: true, default: shortid.generate, uppercase: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    amount: Number,
    paidAt: { type: Date, default: null },
});

BoletoSchema.method("update", function (updates, callback) {
    Object.assign(this, updates, { updatedAt: new Date() });
    this.parent().save(callback);
});

module.exports = mongoose.model("Boleto", BoletoSchema);