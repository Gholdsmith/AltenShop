import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";
import { SelectItem, FilterService, FilterMatchMode } from "primeng/api";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { log } from "console";

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

  selectedProducts: Product[] = [];

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
      console.log("prodcutAdmin");
      console.log(this.product);
      
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
  ];

  this.matchModeOptions = [
    { label: "Custom Equals", value: customFilterName },
    { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
    { label: "Contains", value: FilterMatchMode.CONTAINS }
  ];
  }

  openNew() {
    this.product = new Product();
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

          this.productsService.deleteSelectedProducts(this.selectedProducts);
          
          this.selectedProducts = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
  });
}

editProduct(product: Product) {
  this.product = {...product};
  this.productDialog = true;
}

deleteProduct(product: Product) {
  console.log("delete");
  
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.products = this.products.filter(val => val.id !== product.id);

          // Only one product to delete here => 
          this.productsService.deleteProduct(product.id.toString());

          this.product = new Product();
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
  });
}

hideDialog() {
  this.productDialog = false;
  this.submitted = false;
}

saveProduct() {
  this.submitted = true;

  if (this.product.name.trim()) {
      if (this.product.id) {
          this.products[this.findIndexById(this.product.id.toString())] = this.product;                
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }
      else {
          this.product.id = this.createId();
          this.product.image = 'product-placeholder.svg';
          this.products.push(this.product);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = new Product();
  }
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id.toString() === id) {
          index = i;
          break;
      }
  }

  return index;
}

createId(): number {
 let id = Math.max(...this.products.map(p => p.id));
  return id++;
}

onSelectProducts(product: Product) {
  const index = this.selectedProducts.findIndex(p => p.id === product.id);
  if (index !== -1) {
    this.selectedProducts.splice(index, 1);
    console.log('Désélectionné');
  } else {
    this.selectedProducts.push(product);
    console.log('Sélectionné');
  }
  console.log(this.selectedProducts);
}

onSelctAll(){

}

}
