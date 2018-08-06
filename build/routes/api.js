'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _source = require('../controllers/source');

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/v1', _source2.default.getAll);
router.get('/v1/:id', _source2.default.getOne);
router.post('/v1', _source2.default.createData);
router.put('/v1/:id', _source2.default.updateData);
router.delete('/v1/:id', _source2.default.deleteData);

exports.default = router;