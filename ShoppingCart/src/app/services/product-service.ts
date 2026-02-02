import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  // private baseUrl = 'https://localhost:44374/api/Product';
  private baseUrl = 'http://backend-cart-alb-1376900669.ap-southeast-1.elb.amazonaws.com/api/Product';
  private _products: any[] = [];

  private selectedProductSource = new BehaviorSubject<any>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();


  constructor(private http: HttpClient) { }

  setSelectedProduct(product: any) {
    debugger;
    this.selectedProductSource.next(product);
  }

  getProducts(): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>(this.baseUrl);
  }


  getById(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

//   create(product: Product) {
//     return this.http.post<Product>(this.baseUrl, product).pipe(
//       tap(() => this.getAll().subscribe()) // auto-refresh
//     );
//   }

//   update(product: Product) {
//     return this.http.put(`${this.baseUrl}/${product.id}`, product).pipe(
//       tap(() => this.getAll().subscribe())
//     );
//   }

//   delete(id: number) {
//     return this.http.delete(`${this.baseUrl}/${id}`).pipe(
//       tap(() => this.getAll().subscribe())
//     );
//   }
}