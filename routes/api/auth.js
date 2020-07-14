const express = require('express')
const router = express.Router();

//@route GET api/auth
//@desc Test route
//@accsess Public

router.get('/', (req, res) => res.send('Auth route'));

module.exports = router