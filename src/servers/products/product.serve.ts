import { Injectable } from '@nestjs/common';
import { Product } from '../../models/Product.model'
@Injectable()
export class ProductService {
  getHello(): string {
    return 'Hello World!';
  }

  createProduct(product: Product): any {
    return "teste";
  }
}
