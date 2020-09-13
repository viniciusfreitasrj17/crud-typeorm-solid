import { Router } from 'express';
import { createProductController } from './useCases/CreateProduct';
import { deleteProductController } from './useCases/DeleteProduct';
import { listProductsController } from './useCases/ListProducts';

const routes = Router();

// routes User
routes.post('/products', (request, response) => {
  return createProductController.handle(request, response);
});
routes.get('/products', (request, response) => {
  return listProductsController.handle(request, response);
});
routes.delete('/products/:id', (request, response) => {
  return deleteProductController.handle(request, response);
});

export default routes;
