import db from '../db/db';

class Models {
	create(data){
		const id = db.length + 1;
		const dataBaru = {
			id: id.toString(),
			nama: data.nama || '',
			matakuliah: data.matakuliah || '',
			materi: data.materi || '',
			keterangan: data.keterangan || ''
		};
		db.push(dataBaru);
		return dataBaru;
	}

	findAll(){
		return db;
	}

	findOne(id){
		return db.find(data => data.id === id);
	}

	updateData(id, data){
		const cari = this.findOne(id);
		const index = db.indexOf(cari);
		db[index].nama = data['nama'] || db.nama;
		db[index].matakuliah = data['matakuliah'] || db.matakuliah;
		db[index].materi = data['materi'] || db.materi;
		db[index].keterangan = data['keterangan'] || db.keterangan
		return db[index];
	}


	deleteData(id){
		const cari = this.findOne(id);
		const index = db.indexOf(cari);
		db.splice(index, 1);
		return {message: "Data berhasil dihapus"};
	}
}

export default new Models();