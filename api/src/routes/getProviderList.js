const { Router } = require('express');
const {getAllProviderList, getProviderListById, addProviderList, putProviderList, deleteProviderList} = require('../controllers/ProviderList')
const router = Router();

router.get('/', getAllProviderList)
router.get('/:id', getProviderListById)
router.post('/', addProviderList)
router.put('/:id', putProviderList);
router.delete('/:id', deleteProviderList);

module.exports = router;