import Product from '../../entities/Product';
import { IProductRepository } from '../IProductRepository';
import { getRepository } from 'typeorm';

export class DataBaseProductsRepository implements IProductRepository {
  async findByName(name: string): Promise<Product | undefined> {
    const repo = getRepository(Product);
    const product = repo.findOne({ where: { name } });

    if (product) {
      return product;
    }
  }

  async saveProduct(product: Product): Promise<void> {
    const repo = getRepository(Product);

    await repo.save(product);
  }

  async listProducts(): Promise<Product[] | undefined> {
    const repo = getRepository(Product);

    const products = repo.find();

    if (products) {
      return products;
    }
  }
}
