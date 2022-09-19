import ProductService from '../services/ProductService.js';

class ProductController {
	async createProduct(req, res) {
		try {
			let prices = JSON.parse(req.body.prices);
			let product = await ProductService.createProduct({...req.body, prices}, req.files.images);
			return res.status(200).json(product);	
		} catch(e) {
			res.status(500).json(e);
		}			
	}

	async getProducts(req, res) {
		try {
			let products = await ProductService.getProducts();
			return res.status(200).json(products);	
		} catch(e) {
			res.status(500).json(e);
		}			
	}

	async getProduct(req, res) {
		try {
			let product = await ProductService.getProduct(req.params.id);
			if (product == null) 
				res.status(400).json({message: "There's no such product"});				
			return res.status(200).json(product);	
		} catch(e) {
			res.status(500).json(e);
		}			
	}

	async updateProduct(req, res) {
		try {
			let prices = JSON.parse(req.body.prices);
			let product = await ProductService.updateProduct({...req.body, prices});
			return res.status(200).json(product);	
		} catch(e) {
			res.status(500).json(e);
		}			
	}

	async deleteProduct(req, res) {
		try {
			let product = await ProductService.deleteProduct(req.params.id);
			return res.status(200).json(product);	 
		} catch(e) {
			res.status(500).json(e);
		}			
	}				
}

export default new ProductController();