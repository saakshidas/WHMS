import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProductCardComponent } from './modules/inventory/components/product-card/product-card.component';
import { StockTableComponent } from './modules/inventory/components/stock-table/stock-table.component';
import { InventoryListComponent } from './modules/inventory/pages/inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from './modules/inventory/pages/inventory-details/inventory-details.component';
import { InventoryFormComponent } from './modules/inventory/pages/inventory-form/inventory-form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { materialize } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductCardComponent,
    StockTableComponent,
    InventoryListComponent,
    InventoryDetailsComponent,
    InventoryFormComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
