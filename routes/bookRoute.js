const router = require('express').Router()
const bookController = require('../controllers/bookController')

router.get('/book', bookController.getAllBook)
router.put('/book/:BookID', bookController.updateBook )

module.exports = router