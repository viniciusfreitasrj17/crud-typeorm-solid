import { DataBaseProductsRepository } from '../../repositories/implementations/DataBaseProductsRepository';
import { ListProductsController } from './ListProductsController';
import { ListProductsUseCase } from './ListProductsUseCase';

const dataBaseProductsRepository = new DataBaseProductsRepository();

const listProductsUseCase = new ListProductsUseCase(dataBaseProductsRepository);

const listProductsController = new ListProductsController(listProductsUseCase);

export { listProductsUseCase, listProductsController };
