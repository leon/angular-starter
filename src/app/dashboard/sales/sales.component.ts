import { Component, OnInit } from '@angular/core';
import { SalesService, SalesData } from './sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 300px;
    }
  `]
})
export class SalesComponent {

  data: SalesData[] = [];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  yAxisLabel = 'Population';
  xAxisLabel = 'Country';

  constructor(private salesService: SalesService) {
    this.salesService.getSales().subscribe(data => this.data = data);
  }

  onSelect(event) {
    console.log(event);
  }

}
