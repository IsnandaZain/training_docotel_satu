import express from 'express';
import sourceControl from '../controllers/source';


const router = express.Router();
router.get('/v1', sourceControl.getAll);
router.get('/v1/:id', sourceControl.getOne);
router.post('/v1', sourceControl.createData);
router.put('/v1/:id', sourceControl.updateData);
router.delete('/v1/:id', sourceControl.deleteData);

export default router;