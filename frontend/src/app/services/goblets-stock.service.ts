import { Injectable } from '@angular/core';
import { GobletsStockServiceInterface } from './goblets-stock-service-interface';
import { GobletsStock } from '../models/GobletsStock';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GobletsStockService implements GobletsStockServiceInterface {

  getGobletsStocks(): Observable<GobletsStock[]> {
      throw "Unimplemented function";
  }

  getNextShortage(): Observable<Date> {
      throw "Not implemented";
  }

}
