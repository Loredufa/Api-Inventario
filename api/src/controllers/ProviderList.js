const { ProviderList } = require('../models/index')

function getAllProviderList(req, res, next) {
    return ProviderList.findAll()
      .then((list) => res.send(list))
      .catch((error) => next(error));
  
}

function getProviderListById(req, res, next) {
    const id = req.params.id
    return ProviderList.findByPk(id)
      .then((list) => res.send(list))
      .catch((error) => next(error));
}
  
function addProviderList(req, res, next) {
    const list = req.body
    return ProviderList.create(list) 
      .then((list) => res.send(list))
      .catch((error) => next(error))
}
  
function putProviderList (req, res, next) {
    const id = req.params.id
    const list = req.body
    return ProviderList.update(list, {
      where: {
        id,
      },
    }).then((updateList) => {
        res.send(updateList)
    }).catch((error) => next(error))
};
  
function deleteProviderList (req, res, next) {
    const id = req.params.id
    return ProviderList.destroy({
      where: {
        id,
    },
    }).then(() => {
        res.sendStatus(200)
    }).catch((error) => next(error))
};

module.exports = {
    getAllProviderList,
    getProviderListById,
    addProviderList,
    putProviderList,
    deleteProviderList

}