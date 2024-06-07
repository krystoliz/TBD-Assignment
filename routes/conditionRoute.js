const router = require('express').Router()
const conditionController = require('../controllers/conditionController')

router.get('/condition',conditionController.getCondition)
router.post('/condition',conditionController.createBookCondition)

module.exports = router