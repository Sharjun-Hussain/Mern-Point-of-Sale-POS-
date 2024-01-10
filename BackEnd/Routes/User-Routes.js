const app = require('express')
const {RegisterUser, LoginUser} = require('../Controllers/UserController')
const router = app.Router();


router.route('/register').post(RegisterUser )
router.route('/login').post(LoginUser )


module.exports = router