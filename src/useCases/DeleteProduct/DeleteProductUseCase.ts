import { report } from 'process';
import { IProductRepository } from '../../repositories/IProductRepository';
import { IDeleteProductRequestDTO } from './DeleteProductDTO';

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: IDeleteProductRequestDTO) {
    const productAlreadyExists = await this.productRepository.findByIdProduct(
      data.id
    );

    if (!productAlreadyExists) {
      throw new Error('Product not exists.');
    }

    await this.productRepository.deleteProduct(data.id);
  }
}
