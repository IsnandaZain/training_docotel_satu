'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = {
	createData: function createData(req, res) {
		if (!req.body.nama && !req.body.matakuliah && !req.body.materi && !req.body.keterangan) {
			return res.status(404).send({
				messages: 'Mohon isi semua kolom'
			});
		}
		var dataCreate = _models2.default.create(req.body);
		return res.status(201).send(dataCreate);
	},
	getAll: function getAll(req, res) {
		var data = _models2.default.findAll();
		return res.status(200).send(data);
	},
	getOne: function getOne(req, res) {
		var data = _models2.default.findOne(req.params.id);
		if (!data) {
			return res.status(404).send({
				messages: "Data tidak ditemukan"
			});
		}
		return res.status(200).send({
			id: data.id,
			nama: data.nama,
			matakuliah: data.matakuliah,
			materi: data.materi,
			keterangan: data.keterangan
		});
	},
	updateData: function updateData(req, res) {
		var data = _models2.default.findOne(req.params.id);
		if (!data) {
			return res.status(404).send({
				messages: "Data tidak ditemukan"
			});
		}
		var dataUpdate = _models2.default.updateData(req.params.id, req.body);
		return res.status(200).send(dataUpdate);
	},
	deleteData: function deleteData(req, res) {
		var data = _models2.default.findOne(req.params.id);
		if (!data) {
			return res.status(404).send({
				messages: "Data tidak ditemukan"
			});
		}
		var dataDelete = _models2.default.deleteData(req.params.id);
		return res.status(202).send(dataDelete);
	}
};

exports.default = App;