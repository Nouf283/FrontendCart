import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../services/product-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList implements OnInit  {
  products: any[] = [];
  //router: any;
 
  constructor(public productService: ProductServices, public router:Router) { }
   ngOnInit(): void {
     this.loadProducts();
  }

  goToProductDetail(product: any) {
    debugger;
  this.productService.setSelectedProduct(product);
  //this.router.navigate(['/product-details',product.id]);
}

loadProducts() {
  this.productService.getProducts().subscribe({
    next: data => {
       console.log('Products received:', data); // Logs the successful response
      this.products = data;
    },
    error: err => {
      console.error('HTTP Error:', err);  // Logs the full HttpErrorResponse object
      console.log('Status:', err.status); // Logs the HTTP status code
      console.log('Status Text:', err.statusText);
      console.log('Error Body:', err.error); // Logs backend error message if any
    },
    complete: () => {
     
      console.log('Product loading completed.');

      
      this.products.forEach(product => {
        // console.log('Product:', product);
        // console.log('Image path:', this.products.map(p => p.pictureUrl));

      
        if (!product.pictureUrl) {
          product.pictureUrl = 'assets/images/products/placeholder.png';
        }

        
        if (product.pictureUrl.startsWith('/images/')) {
          product.pictureUrl = 'assets' + product.pictureUrl;
        }
      });
    }
  });
}

  reloadProducts() {
    this.loadProducts(); // reload manually
  }

}
