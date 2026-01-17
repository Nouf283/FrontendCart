import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product-list',
    loadComponent: () =>
      import('./product/product-list/product-list').then(m => m.ProductList)
  },
  {
    path: 'product-details/:id',
    loadComponent: () =>
      import('./product/product-detail/product-detail').then(m => m.ProductDetail)
  },
   {
    path: 'item-list',
    loadComponent: () =>
      import('./item-list/item-list').then(m => m.ItemList)
  },
  //{ path: '', redirectTo: 'product-list', pathMatch: 'full' },
 // { path: '**', redirectTo: 'product-list' }
    { path: '', redirectTo: 'item-list', pathMatch: 'full' },
    { path: '**', redirectTo: 'item-list' }
];

