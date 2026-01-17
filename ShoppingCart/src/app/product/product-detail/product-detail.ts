import { Component } from '@angular/core';
import { ProductServices } from '../../services/product-service';
import { Product } from '../../models/product';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-product-detail',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product?: Product;
  src1: string = "assets/images/products/glove-code1.png"
  src2: string = "assets/images/products/glove-code2.png"
  src3: string = "assets/images/products/glove-react1.png"
  src4:string="assets/images/products/glove-react2.png"
 constructor(private productService: ProductServices) {}

  ngOnInit() {
    this.productService.selectedProduct$.subscribe(product => {
      debugger;
      if (product.pictureUrl.startsWith('/images/')) {
        product.pictureUrl = 'assets' + product.pictureUrl;
      }
      product.temppictureUrl =  product.pictureUrl;
      console.log(product);
      this.product = product;
    });
  }
  public changeImage(src: any) {
    debugger;
      this.product!.temppictureUrl = src;
  }
}
