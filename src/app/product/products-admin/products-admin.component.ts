import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";
import { SelectItem, FilterService, FilterMatchMode } from "primeng/api";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: "app-products-admin",
  templateUrl: "./products-admin.component.html",
  styleUrls: ["./products-admin.component.scss"],
})
export class ProductsAdminComponent implements OnInit {
  cols: any[];
  productDialog: boolean;

  products: Product[] = [];

  product: Product;

  selectedProducts: Product[];

  submitted: boolean;

  matchModeOptions: SelectItem[];

  constructor(
    private productsService: ProductsService,
    private filterService: FilterService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
}

deleteSelectedProducts() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.products = this.products.filter(val => !this.selectedProducts.includes(val));
          this.selectedProducts = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
  });
}

}
