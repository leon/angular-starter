import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { SalesService } from './sales/sales.service';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    SalesComponent,
  ],
  providers: [
    SalesService,
  ]
})
export class DashboardModule { }
