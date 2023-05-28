const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    
     phone: {
            type: String,
            required: true
     },

     email: {
        type: String,
        required: true
     },
     password: {
        type: String,
        required: true
     },
     
        blocked: {
            type: Boolean,
            default: false
        
     }
    
})

module.exports.user = mongoose.model('user', userSchema)