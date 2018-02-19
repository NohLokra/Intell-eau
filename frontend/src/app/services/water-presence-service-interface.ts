import { Observable } from 'rxjs/Observable';
import { WaterPresence } from '../models/WaterPresence';

export interface WaterPresenceServiceInterface {

    getWaterPresences(): Observable<WaterPresence[]>;
}
