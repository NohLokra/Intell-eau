import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GobletsStock } from '../models/GobletsStock';

@Injectable()
export class FakeGobletsStockService {

  constructor() { }

  getGobletsStocks(): Observable<Array<GobletsStock>> {
    let gobletsStock: Array<GobletsStock> = [
      {
        createdAt: "2018-02-01 20:00:00",
        value: "12"
      }
    ]
  }

}
