'use strict';

import {Router} from 'express';
import * as controller from './product.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/:brand', auth.isAuthenticated, controller.showByBrand);
router.post('/', auth.hasRole('admin'), controller.create);
router.post('/raiseToGift/:id', auth.isAuthenticated(), controller.raiseToGift);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
