import express from 'express';

const router = express.Router();
const {getClient, postClient} = require( '../../controllers/clientes/cliente.controller');


router.route('/cliente').get(getClient)
router.route('/cliente',).post(postClient)

module.exports = router;