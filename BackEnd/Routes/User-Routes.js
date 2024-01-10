const app = require('express')
const {RegisterUser} = require('../Controllers/UserController')
const router = app.Router();


router.route('/users/register').post(RegisterUser)



module.exports = router