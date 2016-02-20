'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

var newGift;

describe('Gift API:', function () {

  describe('GET /api/gifts', function () {
    var gifts;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/gifts').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        gifts = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      expect(gifts).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/gifts', function () {
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/gifts').send({
        name: 'New Gift',
        info: 'This is the brand new gift!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newGift = res.body;
        done();
      });
    });

    it('should respond with the newly created gift', function () {
      expect(newGift.name).to.equal('New Gift');
      expect(newGift.info).to.equal('This is the brand new gift!!!');
    });
  });

  describe('GET /api/gifts/:id', function () {
    var gift;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/gifts/' + newGift._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        gift = res.body;
        done();
      });
    });

    afterEach(function () {
      gift = {};
    });

    it('should respond with the requested gift', function () {
      expect(gift.name).to.equal('New Gift');
      expect(gift.info).to.equal('This is the brand new gift!!!');
    });
  });

  describe('PUT /api/gifts/:id', function () {
    var updatedGift;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).put('/api/gifts/' + newGift._id).send({
        name: 'Updated Gift',
        info: 'This is the updated gift!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedGift = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedGift = {};
    });

    it('should respond with the updated gift', function () {
      expect(updatedGift.name).to.equal('Updated Gift');
      expect(updatedGift.info).to.equal('This is the updated gift!!!');
    });
  });

  describe('DELETE /api/gifts/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/gifts/' + newGift._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when gift does not exist', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/gifts/' + newGift._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=gift.integration.js.map
