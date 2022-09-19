import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Product = new Schema({
	name: {type: String, required: true},
	content: {type: String, required: true},
	images: {type: [String]},
	status: {type: Boolean, required: true},
	price: {type: String, required: true},
	prices: {type: [{city: String, price: Number}]}
});

export default model('Product', Product);