import { DataBaseProductsRepository } from '../../repositories/implementations/DataBaseProductsRepository';
import { DeleteProductController } from './DeleteProductController';
import { DeleteProductUseCase } from './DeleteProductUseCase';

const dataBaseProductsRepository = new DataBaseProductsRepository();

const deleteProductUseCase = new DeleteProductUseCase(
  dataBaseProductsRepository
);

const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductUseCase, deleteProductController };
