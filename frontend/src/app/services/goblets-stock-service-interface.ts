import { GobletsStock } from '../models/GobletsStock';
import { Observable } from 'rxjs/Observable';

export interface GobletsStockServiceInterface {
    getGobletsStocks(): Observable<GobletsStock[]>;
    getNextShortage(): Observable<Date>;
}
