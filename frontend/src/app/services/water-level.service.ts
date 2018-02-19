import { Injectable } from '@angular/core';
import { WaterLevelServiceInterface } from './water-level-service-interface';
import { WaterLevel } from '../models/WaterLevel';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class WaterLevelService implements WaterLevelServiceInterface {

    constructor() { }

    getWaterLevels(): Observable<WaterLevel[]> {
        throw "Not implemented";
    }
}
