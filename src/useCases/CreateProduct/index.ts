import { DataBaseProductsRepository } from '../../repositories/implementations/DataBaseProductsRepository';
import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';

const dataBaseUsersRepository = new DataBaseProductsRepository();

const createProductUseCase = new CreateProductUseCase(dataBaseUsersRepository);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductUseCase, createProductController };
