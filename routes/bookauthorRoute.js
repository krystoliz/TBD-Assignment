const router = require('express').Router()
const bookauthorController = require('../controllers/bookauthorController')

router.get('/bookauthor', bookauthorController.getBookauthor)

module.exports = router