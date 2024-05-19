import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";
import { SelectItem, FilterService, FilterMatchMode } from "primeng/api";

@Component({
  selector: "app-products-admin",
  templateUrl: "./products-admin.component.html",
  styleUrls: ["./products-admin.component.scss"],
})
export class ProductsAdminComponent implements OnInit {
  products: Product[] = [];
  cols: any[];

  matchModeOptions: SelectItem[];

  constructor(
    private productsService: ProductsService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {

    const customFilterName = 'custom-equals';

    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });


    this.filterService.register(customFilterName, (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
      }

      if (value === undefined || value === null) {
          return false;
      }

      return value.toString() === filter.toString();
  });


  this.cols = [
    { field: "code", header: "code" },
    { field: "name", header: "name" },
    { field: "Action", header: "Action" },
  ];

  this.matchModeOptions = [
    { label: "Custom Equals", value: customFilterName },
    { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
    { label: "Contains", value: FilterMatchMode.CONTAINS }
  ];
  }
}
