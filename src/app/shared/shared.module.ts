import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpModule } from '@angular/http';

/**
 * Shared module is where we place all our global imports such as UI Bootstrap
 */
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    NgbModule.forRoot(),
    NgxChartsModule,
  ],

  // Share all the modules. So that when we import SharedModule in another module, we automatically have access to all of them
  exports: [
    CommonModule,
    HttpModule,
    RouterModule,
    NgbModule,
    NgxChartsModule,
  ]
})
export class SharedModule { }
