const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        firstname:{
                type: String,
                default: null
        },
        lastname:{
                type: String,
                default: null
        },
        email:{
                type: String,
                unique: true,
                required: [true, 'It is a mandatory field.']
        },
        dateofbirth:{
                type: Date,
                required: [true, 'It is a mandatory field.']
        },
        country:{
                type: String,
                required: [true, 'It is a mandatory field.']
        },
        state:{
                type: String,
                required: [true, 'It is a mandatory field.']
        },
        profilepicture: {
                type: Buffer
        },
        password:{
                type: String
        },
        token:{
                type: String
        }
});

module.exports = mongoose.model('user', userSchema);