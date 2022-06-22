const mongoose = require('mongoose');
const {isEmail} = require('validator')

const authorSchema = new mongoose.Schema( {
    fname: { type: String,
        required: true},
    lname: {type: String,
        required: true},
    emailId: {type:String,
        required: true,
        unique:true,
        validate: [isEmail,'invalid Email']
    },
    title: {
        type: String,
        required:true,
        enum: ["Mr.", "Mrs.", "Miss"] 
    },
    password: {type:String,
    required:true},
    
}, { timestamps: true });

module.exports = mongoose.model('AuthorProject', authorSchema)