import { WaterLevel } from '../models/WaterLevel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WaterLevelServiceInterface } from './water-level-service-interface';

@Injectable()
export class FakeWaterLevelService implements WaterLevelServiceInterface {

    constructor() { }

    getWaterLevels(): Observable<WaterLevel[]> {
        let waterLevels = [
            {
                createdAt: "2018-02-01 20:00:00",
                value: 0
            },
            {
                createdAt: "2018-02-01 20:15:00",
                value: 0
            },
            {
                createdAt: "2018-02-01 20:30:00",
                value: 0
            },
            {
                createdAt: "2018-02-01 20:45:00",
                value: 1.5
            },
            {
                createdAt: "2018-02-01 21:00:00",
                value: 1.5
            },
            {
                createdAt: "2018-02-01 21:15:00",
                value: 2
            }
        ];

        return new Observable(sub => {
            sub.next(waterLevels);
            sub.complete();
        });
    }
}
