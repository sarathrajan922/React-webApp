var express = require('express');
var router = express.Router();
const userControl = require('../controller/user-control')
const middleware = require('../middleware/jwt')

/* GET users listing. */

router.post('/login', userControl.userLogin)

router.post('/userRegister', userControl.userRegister)

router.get('/getuserDetails',middleware.verifyJwt, userControl.getUserDetails)

module.exports = router;
