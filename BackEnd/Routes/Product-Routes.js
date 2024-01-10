const app = require('express')

const router = app.Router();
const {isAuthenticatedUser, Authorization} = require('../Middlewares/Authenticate');


router.route('/reate').post(RegisterUser )
router.route('/list').post(LoginUser )
router.route('/delete').post(isAuthenticatedUser,Authorization('cashier'),signout)


module.exports = router