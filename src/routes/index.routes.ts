import express from 'express';
const router = express.Router();
const {indexWelcome} = require( '../controllers/indexcontroller');

router.route('/prueba').get(indexWelcome)

module.exports = router;