var express = require('express');
var router = express.Router();
const adminControl = require('../controller/admin-control')

/* GET login page. */
router.post('/login',adminControl.adminLogin)

router.get('/getUserData', adminControl.getUserData)

router.get('/deleteUser/:id', adminControl.deleteUser)




module.exports = router;
