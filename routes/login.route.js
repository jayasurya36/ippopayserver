const { saveLoginDetails } = require('../controllers/login.controller');

const router = require('express').Router();
router.post('/login' , saveLoginDetails);

module.exports = router;