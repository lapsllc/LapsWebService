'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _express = require('express');

var _productController = require('./product.controller');

var controller = _interopRequireWildcard(_productController);

var _authAuthService = require('../../auth/auth.service');

var auth = _interopRequireWildcard(_authAuthService);

var router = new _express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/:brand', auth.isAuthenticated, controller.showByBrand);
router.post('/', auth.hasRole('admin'), controller.create);
router.post('/raiseToGift/:id', auth.isAuthenticated(), controller.raiseToGift);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router['delete']('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
//# sourceMappingURL=index.js.map
