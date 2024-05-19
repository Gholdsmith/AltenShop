import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";
import { SelectItem } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  sortOptions: SelectItem[];


  sortKey: string;

  sortOrder: number;

  sortField: string;

  constructor(
    private productsService: ProductsService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });

    this.sortOptions = [
      { label: "Price High to Low", value: "!price" },
      { label: "Price Low to High", value: "price" },
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getInputValue(event: Event): string {
    const { target } = event;
    if (target) {
      return (target as HTMLInputElement).value;
    }
    return ''; 
  }
  

}
