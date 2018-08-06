'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Models = function () {
	function Models() {
		_classCallCheck(this, Models);
	}

	_createClass(Models, [{
		key: 'create',
		value: function create(data) {
			var id = _db2.default.length + 1;
			var dataBaru = {
				id: id.toString(),
				nama: data.nama || '',
				matakuliah: data.matakuliah || '',
				materi: data.materi || '',
				keterangan: data.keterangan || ''
			};
			_db2.default.push(dataBaru);
			return dataBaru;
		}
	}, {
		key: 'findAll',
		value: function findAll() {
			return _db2.default;
		}
	}, {
		key: 'findOne',
		value: function findOne(id) {
			return _db2.default.find(function (data) {
				return data.id === id;
			});
		}
	}, {
		key: 'updateData',
		value: function updateData(id, data) {
			var cari = this.findOne(id);
			var index = _db2.default.indexOf(cari);
			_db2.default[index].nama = data['nama'] || _db2.default.nama;
			_db2.default[index].matakuliah = data['matakuliah'] || _db2.default.matakuliah;
			_db2.default[index].materi = data['materi'] || _db2.default.materi;
			_db2.default[index].keterangan = data['keterangan'] || _db2.default.keterangan;
			return _db2.default[index];
		}
	}, {
		key: 'deleteData',
		value: function deleteData(id) {
			var cari = this.findOne(id);
			var index = _db2.default.indexOf(cari);
			_db2.default.splice(index, 1);
			return {};
		}
	}]);

	return Models;
}();

exports.default = new Models();