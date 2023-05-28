const {admin, user} = require('../config/mongoose')

module.exports = {

    adminLogin: async (data)=>{

        const {username, password} = data

        // const newAdmin = new admin({
        //     username,
        //     password
        // })

        // const result =await newAdmin.save()

        const result = await admin.findOne({username : username})
     
       
        return username === result.username && password === result.password ? {
            status: true,
            data : result,
            message: 'admin authentication successful'
        } : {
            status : false,
            data : result,
            message : 'admin authentication failed'
        }

    },
    getUserData : async ()=>{
        const result = await user.find({})
        return result
    },

    deleteUser: async (id)=>{
        const result = await user.deleteOne({_id: id})
        return result
    }
}