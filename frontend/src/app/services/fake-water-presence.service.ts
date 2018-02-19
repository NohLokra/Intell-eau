import { Injectable } from '@angular/core';
import { WaterPresence } from '../models/WaterPresence';
import { Observable } from 'rxjs/Observable';

import { WaterPresenceServiceInterface } from './water-presence-service-interface';

@Injectable()
export class FakeWaterPresenceService implements WaterPresenceServiceInterface {

  constructor() { }

  getWaterPresences() : Observable<WaterPresence[]> {
    let waterPresences = [
        {
            createdAt: "2018-02-01 20:00:00",
            value: true
        },
        {
            createdAt: "2018-02-01 20:15:00",
            value: true
        },
        {
            createdAt: "2018-02-01 20:30:00",
            value: true
        },
        {
            createdAt: "2018-02-01 20:45:00",
            value: true
        },
        {
            createdAt: "2018-02-01 21:00:00",
            value: true
        },
        {
            createdAt: "2018-02-01 21:15:00",
            value: false
        }
    ];

    return new Observable(sub => {
        sub.next(waterPresences);
        sub.complete();
    });
  }

}
