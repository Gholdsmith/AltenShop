import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private productsPath = 'assets/products.json';

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.productsPath)
  // }


  getProducts(): Observable<Product[]> {
    return this.http.get<{ data: Product[] }>(this.productsPath).pipe(
      map(response => response.data)
    );
  }

  deleteProduct(selectedProducts : Product[]){}

  updateProduct(product: Product){}
}
