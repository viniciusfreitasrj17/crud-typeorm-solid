import { DataBaseProductsRepository } from '../../repositories/implementations/DataBaseProductsRepository';
import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';

const dataBaseProductsRepository = new DataBaseProductsRepository();

const createProductUseCase = new CreateProductUseCase(
  dataBaseProductsRepository
);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductUseCase, createProductController };
