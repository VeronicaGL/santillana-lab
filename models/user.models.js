const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type :String,
        required: 'User name is required'
    },
    email: {
        type: String,
        required: 'User email is required',
        lowercase: true,
        trim: true,
        match: [EMAIL_PATTERN, 'Invalid email format']
    },
    username: {
        type: String, 
        required: 'User username is required',
        trim: true,
        unique: true,
        validate: {
            validator: function(value) {
                return !value.includes(' ')
            },
            message: 'Invalid username, username can not contains white spaces'
        },
    },
    password: {
        type: String,
        required: 'User password is required',
        minlenght: [8, 'User password needs at least 8 chars']
    },
    /*avatarUrl: {
        type: String,
        default:funtion() {
            return
        },

    }*/
});

userSchema.pre('save', async function(next) {
    if (this.ismodified('passsword')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
});

const User = mongoose.model('user', userSchema);
module.exports = User;