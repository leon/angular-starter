import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface SalesData {
  name: string;
  value: number;
}

@Injectable()
export class SalesService {

  constructor(private http: Http) { }

  getSales(): Observable<SalesData[]> {
    return this.http.get('/assets/test-data/sales.json')
      .map(r => r.json())
      .do(d => console.log(d));
  }

}
