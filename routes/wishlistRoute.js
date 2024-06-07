const router = require('express').Router()
const wishlistController = require('../controllers/wishlistController')

router.get('/wishlist',wishlistController.getWishlist)
router.post('/wishlist',wishlistController.addWishlist)
module.exports = router