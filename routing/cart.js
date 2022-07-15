const {Router} = require('express')
const {findAll,add,update,destroy} = require('../controllers/cart')
const {authorization} = require('../middleaware/authorizationUser')

const router = Router()

router.get('/all',authorization,findAll)
router.post('/add',authorization,add)
router.put('/update',authorization,update)
router.delete('/delete/:id',authorization,destroy)

module.exports = router;
