import Product from '../../entities/Product';
import { IProductRepository } from '../../repositories/IProductRepository';
import { ICreateProductRequestDTO } from './CreateProductDTO';

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: ICreateProductRequestDTO) {
    const productAlreadyExists = await this.productRepository.findByName(
      data.name
    );

    if (productAlreadyExists) {
      throw new Error('Product already exists.');
    }

    const product = new Product();
    product.name = data.name;
    product.amount = data.amount;
    product.price = `R$ ${data.price}`;

    await this.productRepository.saveProduct(product);
  }
}
