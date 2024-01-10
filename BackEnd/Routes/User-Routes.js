const app = require('express')
const {RegisterUser} = require('../Controllers/UserController')
const router = app.Router();


router.route('/register').post(RegisterUser )
router.route('/login').post(RegisterUser )


module.exports = router