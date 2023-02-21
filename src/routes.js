const { Router } = require('express');
const CustomerController = require('./app/controllers/CustomerController');

const router = Router();

router.get('/customer', CustomerController.index);
router.get('/customer/:id', CustomerController.show);
router.post('/customer', CustomerController.store);
router.put('/customer/:id', CustomerController.update);
router.delete('/customer/:id', CustomerController.delete);

module.exports = router;
