const router = require('express').Router()
const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
//router.post('/products', ProductController.post)
//router.pul('/products:id', ProductController.put)
//router.delete('/products:id', ProductController.delete)

module.exports = router