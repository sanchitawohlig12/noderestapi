const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid name`
        },
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }

    },
    doj: {
        type: Date,

        default: Date.now
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["male", "female"]
    },
    phone: {
        type: String,
        required: true,
        maxlength: 10,
        minlength: 10,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [8, 'Must be at least 8, got {VALUE}'],
        maxlength: [8, 'Must be at least 8, got {VALUE}'],
    },
    // confirmPassword: {
    //     type: String,
    //     validate(value) {
    //         if (!validator.isEmail(value)) {
    //             throw new Error("Email is invalid");
    //         }
    //     }

    // }
    // // required: true,
    // equalTo: "#password"
    // // validate(value) {
    // //     if (!validator.equals(value, password)) {
    // //         throw new Error("password is not match");
    // //     }
    // // }

})

// we are creating new collection
const user = new mongoose.model("User", userSchema)

module.exports = user;