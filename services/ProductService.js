import Product from '../models/Product.js';
import FileService from '../files/service.js';

class ProductService {
	async createProduct(props, images) {
		let imageNames = FileService.download(images);
		let product = await Product.create({...props, imageUrls: imageNames});
		return product;			
	}

	async getProducts() {
		let products = await Product.find();
		return products;		
	}

	async getProduct(id) {
		if (!id) {
			throw new Error("ID cannot pass")
		}
		let products = await Product.findById(id);
		return products;
	}

	async updateProduct(newProduct, newImages) {
			if (!newProduct._id) {	
				throw new Error("Bad Request");	
			}
			let oldProduct = await Product.findById(newProduct._id);
			let newImageNames = FileService.download(newImages);
			console.log("imageUrls : ", [...oldProduct.imageUrls, ...newImageNames]);
			let product = await Product.findByIdAndUpdate(newProduct._id, {...newProduct, imageUrls : [...oldProduct.imageUrls, ...newImageNames]}, {new: true});
			return product;		
	}

	async deleteProduct(id) {
		if (!id)
			throw new Error("ID cannot pass")
		let product = await Product.findByIdAndDelete(id);	
		return product;					
	}
}

export default new ProductService();
