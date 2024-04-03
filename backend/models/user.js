const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    trackingId: {
        type: String,
        required: true,
    },
    product: {
        type: [String],
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
