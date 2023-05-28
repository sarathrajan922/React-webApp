const mongoose = require('mongoose')
const mongoDBURL = 'mongodb://0.0.0.0:27017'; // Replace with your MongoDB connection URL
 const connect = async () => {
  const dbName ='reactWebApp'

  try {
    await mongoose.connect(mongoDBURL, {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error(error)
  }
}
 const user = require('../Schemas/user-schema').user;
 const admin = require('../Schemas/admin-schema').admin;
const db = {
    connect,
    user,
    admin
}
module.exports =db