import { Controller, Get } from '@nestjs/common';
import { ProductService } from 'src/servers/products/product.serve';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }
}
