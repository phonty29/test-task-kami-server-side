import { Router } from 'express';
import Product from '../models/Product.js';
import ProductController from '../controllers/ProductController.js';

const router = new Router();

router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProduct);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

export default router;
