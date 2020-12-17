var express = require("express"),
    router = express.Router();




/** importando el modulo de rutas **/
const prueba = require("./index.routes");
const validar = require("./ValidarCliente/validaCliente.route");


/**definiendo la ruta que nos brindara acceso al backend */
router.use('/api/prueba', prueba);

router.use('/api/cliente', validar);

module.exports = router;