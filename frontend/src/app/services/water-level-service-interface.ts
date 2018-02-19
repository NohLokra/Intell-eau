import { WaterLevel } from '../models/WaterLevel';
import { Observable } from 'rxjs/Observable';

export interface WaterLevelServiceInterface {
    getWaterLevels(): Observable<WaterLevel[]>;
}
