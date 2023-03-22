const { Router } = require('express');
const axios = require ('axios');
const router = Router();

const ProductRoute = require('./getProduct');
const SalesRoute = require('./getSales');
const PurchaseRoute = require('./getPurchase');
const CustomerRoute = require('./getCustomer');
const ProviderRoute = require('./getProvider');
const CategoryRoute = require('./getCategory');
const UserRoute = require('./getUser');
const MoveRoute = require('./getMove');
const ProviderListRoute = require('./getProviderList');

router.use('/productos', ProductRoute)
router.use('/ventas', SalesRoute)
router.use('/compras', PurchaseRoute)
router.use('/clientes', CustomerRoute)
router.use('/proveedores', ProviderRoute)
router.use('/categorias', CategoryRoute)
router.use('/usuarios', UserRoute)
router.use('/movimientos', MoveRoute)
router.use('/lista_proveedor', ProviderListRoute)





module.exports = router;