import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    TableModule,
    ButtonModule,
    TagModule,
    DropdownModule,
    RatingModule,
    FormsModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class ProductModule { }
