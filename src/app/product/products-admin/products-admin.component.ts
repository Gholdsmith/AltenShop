import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true;
    
    constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
