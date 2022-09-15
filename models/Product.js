import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Product = new Schema({
	name: {type: String, required: true},
	image: String,
	status: {type: Boolean, required: true},
	price: {type: Number, required: true}
});

export default model('Product', Product);