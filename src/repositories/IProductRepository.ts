import Product from '../entities/Product';

export interface IProductRepository {
  findByName(name: string): Promise<Product | undefined>;
  saveProduct(product: Product): Promise<void>;
  listProducts(): Promise<Product[] | undefined>;
  deleteProduct(id: string): Promise<void>;
  findByIdProduct(id: string): Promise<Product | undefined>;
}
