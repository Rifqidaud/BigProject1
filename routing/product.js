const {Router} = require('express')
const {findAll,findById,add,update,destroy} = require('../controllers/product')
const {authorization} = require('../middleaware/authorizationAdmin')

const router = Router()

router.post('/add',authorization,add)
router.get('/all',findAll)
router.get('/detail/:id',findById)
router.post('/add',findById,add)
router.put('/update/:id',authorization,update)
router.delete('/delete/:id',authorization,destroy)


module.exports = router;
