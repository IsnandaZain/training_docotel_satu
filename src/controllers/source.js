import AppModel from '../models/models';

const App = {
	createData(req,res){
		if(!req.body.nama && !req.body.matakuliah && !req.body.materi && !req.body.keterangan){
			return res.status(404).send({
				messages: 'Mohon isi semua kolom'
			});
		}
		const dataCreate = AppModel.create(req.body);
		return res.status(201).send(dataCreate);
	},


	getAll(req,res){
		const data = AppModel.findAll();
		return res.status(200).send(data);
	},

	getOne(req,res){
		const data = AppModel.findOne(req.params.id);
		if(!data){
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

	updateData(req,res){
		const data = AppModel.findOne(req.params.id);
		if(!data){
			return res.status(404).send({
				messages: "Data tidak ditemukan"
			});
		}
		const dataUpdate = AppModel.updateData(req.params.id, req.body);
		return res.status(200).send(dataUpdate);
	},

	deleteData(req,res){
		const data = AppModel.findOne(req.params.id);
		if(!data){
			return res.status(404).send({
				messages: "Data tidak ditemukan"
			});
		}
		const dataDelete = AppModel.deleteData(req.params.id);
		return res.status(202).send(dataDelete);
	}
}

export default App;