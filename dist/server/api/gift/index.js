'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _express = require('express');

var _giftController = require('./gift.controller');

var controller = _interopRequireWildcard(_giftController);

var _authAuthService = require('../../auth/auth.service');

var auth = _interopRequireWildcard(_authAuthService);

var router = new _express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/:id', auth.hasRole('admin'), controller.show);
router.post('/', auth.hasRole('admin'), controller.create);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router['delete']('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
//# sourceMappingURL=index.js.map
