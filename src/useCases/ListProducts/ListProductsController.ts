import { Request, Response } from 'express';
import { ListProductsUseCase } from './ListProductsUseCase';

export class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const products = await this.listProductsUseCase.execute();

      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
