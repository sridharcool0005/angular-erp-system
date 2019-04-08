import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CustomerModule } from './modules/customer/customer.module';
import { ItemModule } from './modules/item/item.module';
import { OrderModule } from './modules/order/order.module';
import { StockModule } from './modules/stock/stock.module';
import { StoreModule } from './modules/store/store.module';
import { TransactionModule } from './modules/transaction/transaction.module';

@NgModule({
  imports:      [
    BrowserAnimationsModule,

    MatButtonModule,
    MatSnackBarModule,

    CustomerModule,
    ItemModule,
    OrderModule,
    StockModule,
    StoreModule,
    TransactionModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
