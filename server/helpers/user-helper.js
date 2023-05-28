
const {user} = require('../config/mongoose')
const jwt = require('../middleware/jwt')

module.exports = {

     
    userRegister : async (data)=>{
        const {email, password, phone, username} = data
        // const user = db.user
        const newUser = new user({
            username,
            phone ,
            email,
            password
        })
       const result = await newUser.save()
       return {
        status: true,
        data: result,
        message: 'Successfully registered'
       }
    },
    userLogin : async (data) =>{
       
        const { email, password} = data
       
        const result = await user.findOne({email: email})
       return email === result.email && password === result.password ? {
        status: true,
        data: result,
        message: 'user authenticated successfully',
        accessToken : jwt.generateAccessToken(email)

       } : {
        status: false,
        data: result,
        message: 'user not authenticated',
        accessToken: null
       }
        
    },

    getUserDetails : async (email) =>{
     
        const result = await user.findOne({email: email})
        return {
            status: true,
            data: result,
            message: 'user details',

        }
    }
    
    

}