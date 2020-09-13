import { IProductRepository } from '../../repositories/IProductRepository';

export class ListProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute() {
    const products = await this.productRepository.listProducts();

    return products;
  }
}
