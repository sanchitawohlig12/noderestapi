const mongoose = require("mongoose")

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("ranking should not be negative");

            }
        },
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    score: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("score should not be negative");

            }
        },
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    }
})

// we are creating new collection
const mens = new mongoose.model("Mens", menSchema)

module.exports = mens;