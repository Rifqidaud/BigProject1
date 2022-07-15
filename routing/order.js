const {Router} = require('express')
const {checkout, getorder, getorderdetail,save} = require('../controllers/order')
const {authorization} = require('../middleaware/authorizationUser')

const router = Router()

router.post('/checkout',authorization,checkout)
router.post('/save',authorization,save)
router.get('/getorder',authorization,getorder)
router.get('/getorderdetail/:id',authorization,getorderdetail)



module.exports = router;