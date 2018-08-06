import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/api';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/api',authRouter);

app.listen(3000, ()=>{
	console.log('Proses listen berjalan');
});