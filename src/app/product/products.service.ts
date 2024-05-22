import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, tap } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //lecture directe
  // private apiUrl = 'assets/products.json';

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<{ data: Product[] }>(this.apiUrl).pipe(
  //     tap(response => console.log('getProducts response:', response.data)),
  //     map(response => response.data)
  //   );
  // }

  // backend json-server
  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
    //   .pipe(
    //   tap(response => console.log( response))
    // );
     
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product>{
    const url = `${this.apiUrl}/${product.id}`
    return this.http.patch<Product>(url, product);
  }


  deleteProduct(productId : string): Observable<any>{
    console.log("delete one product");
    
    const url = `${this.apiUrl}/${productId}`;

    console.log(url);
    
    return this.http.delete(url);

  }

  deleteSelectedProducts(products : Product[]){
    console.log("delete multiple products");

    const deleteObservable = products.map(product => this.deleteProduct(product.id.toString()))
    return forkJoin(deleteObservable);
 }

}
