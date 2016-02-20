'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

var newBrand;

describe('Brand API:', function () {

  describe('GET /api/brands', function () {
    var brands;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/brands').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        brands = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      expect(brands).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/brands', function () {
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/brands').send({
        name: 'New Brand',
        info: 'This is the brand new brand!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newBrand = res.body;
        done();
      });
    });

    it('should respond with the newly created brand', function () {
      expect(newBrand.name).to.equal('New Brand');
      expect(newBrand.info).to.equal('This is the brand new brand!!!');
    });
  });

  describe('GET /api/brands/:id', function () {
    var brand;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/brands/' + newBrand._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        brand = res.body;
        done();
      });
    });

    afterEach(function () {
      brand = {};
    });

    it('should respond with the requested brand', function () {
      expect(brand.name).to.equal('New Brand');
      expect(brand.info).to.equal('This is the brand new brand!!!');
    });
  });

  describe('PUT /api/brands/:id', function () {
    var updatedBrand;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).put('/api/brands/' + newBrand._id).send({
        name: 'Updated Brand',
        info: 'This is the updated brand!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedBrand = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedBrand = {};
    });

    it('should respond with the updated brand', function () {
      expect(updatedBrand.name).to.equal('Updated Brand');
      expect(updatedBrand.info).to.equal('This is the updated brand!!!');
    });
  });

  describe('DELETE /api/brands/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/brands/' + newBrand._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when brand does not exist', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/brands/' + newBrand._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=brand.integration.js.map
