const app = require('express')
const {RegisterUser, LoginUser, signout} = require('../Controllers/UserController')
const router = app.Router();
const {isAuthenticatedUser, Authorization} = require('../Middlewares/Authenticate');


router.route('/register').post(RegisterUser )
router.route('/login').post(LoginUser )
router.route('/Signout').post(isAuthenticatedUser,Authorization('cashier'),signout)


module.exports = router