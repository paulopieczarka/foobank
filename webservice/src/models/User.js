const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true},
    name: {type: String, required: true},
    email: { type: String, lowercase: true, required: true, unique: true },
    password: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    picture: Buffer,
    accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }]
});

UserSchema.method("update", function (updates, callback) {
    Object.assign(this, updates, { updatedAt: new Date() });
    this.parent().save(callback);
});

module.exports = mongoose.model("User", UserSchema);