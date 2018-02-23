import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GobletsStock } from '../models/GobletsStock';

import { GobletsStockServiceInterface } from './goblets-stock-service-interface';

@Injectable()
export class FakeGobletsStockService implements GobletsStockServiceInterface {

  getGobletsStocks(): Observable<Array<GobletsStock>> {
    let gobletsStock: Array<GobletsStock> = [
      {
        createdAt: "2018-02-01 18:00:00",
        value: 25
      },
      {
        createdAt: "2018-02-01 18:15:00",
        value: 23
      },
      {
        createdAt: "2018-02-01 18:30:00",
        value: 18
      },
      {
        createdAt: "2018-02-01 18:45:00",
        value: 15
      },
      {
        createdAt: "2018-02-01 19:00:00",
        value: 12
      },
      {
        createdAt: "2018-02-01 19:15:00",
        value: 12
      },
      {
        createdAt: "2018-02-01 19:30:00",
        value: 12
      },
      {
        createdAt: "2018-02-01 19:45:00",
        value: 12
      },
      {
        createdAt: "2018-02-01 20:00:00",
        value: 12
      },
      {
        createdAt: "2018-02-01 20:15:00",
        value: 12
      },
      {
        createdAt: "2018-02-01 20:30:00",
        value: 12
      },
      {
        createdAt: "2018-02-01 20:45:00",
        value: 8
      },
      {
        createdAt: "2018-02-01 21:00:00",
        value: 8
      },
      {
        createdAt: "2018-02-01 21:15:00",
        value: 7
      }
    ];

    return new Observable(sub => {
        sub.next(gobletsStock);
        sub.complete();
    });
  }

  getNextShortage(): Observable<Date> {
      return new Observable(sub => {
          sub.next(new Date("02/02/2018 21:00:00"));
      });
  }

}
