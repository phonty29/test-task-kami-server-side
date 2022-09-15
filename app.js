import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers/router.js';

const app = express();
app.use(express.json());
app.use(express.static('files/storage'));
app.use(fileUpload({}));
app.use(cors());
app.use('/', router);

const PORT = 1337;
const databaseURL = `mongodb+srv://phonty29:meth132435@cluster0.dhtpcoq.mongodb.net/?retryWrites=true&w=majority`;


async function main() {
	try {
		await mongoose.connect(databaseURL, {useUnifiedTopology: true, useNewUrlParser: true});
		app.listen(PORT, () => console.log(`SERVER STARTED ON THE PORT = ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

main();