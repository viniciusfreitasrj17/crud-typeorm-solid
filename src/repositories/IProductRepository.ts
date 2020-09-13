import Product from '../entities/Product';

export interface IProductRepository {
  findByName(name: string): Promise<Product | undefined>;
  saveProduct(product: Product): Promise<void>;
  listProducts(): Promise<Product[] | undefined>;
}
