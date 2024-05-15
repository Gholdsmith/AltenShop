import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log(data);
      console.log(this.products);
    });
  }
}
