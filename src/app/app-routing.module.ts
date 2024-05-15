import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductsComponent } from "./product/products/products.component";
import { ProductsAdminComponent } from "./product/products-admin/products-admin.component";



const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
