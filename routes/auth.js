const express = require('express');
const { register,getUsers } = require('../controller/auth');
const router = express.Router();

router.post('/', register);
router.get('/',getUsers)
module.exports = router;
