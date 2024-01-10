const app = require('express')

const router = app.Router();
const {isAuthenticatedUser, Authorization} = require('../Middlewares/Authenticate');
const { CreateProduct, listProduct, deleteProduct } = require('../Controllers/ProductController');


router.route('/create').post(isAuthenticatedUser,Authorization('cashier','admin'),CreateProduct )
router.route('/list').get(isAuthenticatedUser,Authorization('cashier','admin'),listProduct )
router.route('/delete').post(isAuthenticatedUser,Authorization('cashier','admin'),deleteProduct)


module.exports = router