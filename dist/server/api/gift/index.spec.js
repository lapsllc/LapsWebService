'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var giftCtrlStub = {
  index: 'giftCtrl.index',
  show: 'giftCtrl.show',
  create: 'giftCtrl.create',
  update: 'giftCtrl.update',
  destroy: 'giftCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  'delete': sinon.spy()
};

// require the index with our stubbed out modules
var giftIndex = proxyquire('./index.js', {
  'express': {
    Router: function Router() {
      return routerStub;
    }
  },
  './gift.controller': giftCtrlStub
});

describe('Gift API Router:', function () {

  it('should return an express router instance', function () {
    expect(giftIndex).to.equal(routerStub);
  });

  describe('GET /api/gifts', function () {

    it('should route to gift.controller.index', function () {
      expect(routerStub.get.withArgs('/', 'giftCtrl.index')).to.have.been.calledOnce;
    });
  });

  describe('GET /api/gifts/:id', function () {

    it('should route to gift.controller.show', function () {
      expect(routerStub.get.withArgs('/:id', 'giftCtrl.show')).to.have.been.calledOnce;
    });
  });

  describe('POST /api/gifts', function () {

    it('should route to gift.controller.create', function () {
      expect(routerStub.post.withArgs('/', 'giftCtrl.create')).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/gifts/:id', function () {

    it('should route to gift.controller.update', function () {
      expect(routerStub.put.withArgs('/:id', 'giftCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/gifts/:id', function () {

    it('should route to gift.controller.update', function () {
      expect(routerStub.patch.withArgs('/:id', 'giftCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/gifts/:id', function () {

    it('should route to gift.controller.destroy', function () {
      expect(routerStub['delete'].withArgs('/:id', 'giftCtrl.destroy')).to.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map
