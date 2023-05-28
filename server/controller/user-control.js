const userHelper = require('../helpers/user-helper')
const user = require('../config/mongoose')



module.exports = {
    userLogin : async (req,res)=>{
       
        let result = await userHelper.userLogin(req.body)

        console.log(result)
        
        result.status ? console.log('user authorized') : console.log("user unauthorized")
         res.json({result})
    
       
    },

    userRegister: async (req,res)=>{
     
        const result = await userHelper.userRegister(req.body)

        res.json({result})
    },

    getUserDetails : async (req,res)=>{ 
        
        const userEmail = req.user
        
        const result = await userHelper.getUserDetails(userEmail)

        res.json({result})
    }
}