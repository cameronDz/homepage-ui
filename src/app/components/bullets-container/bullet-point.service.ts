import { Injectable } from '@angular/core';
import { BulletPointModel } from './bullet-point.model';
import * as _overviewBullets from '../../../assets/data/overviewBullets.json';

@Injectable({ providedIn: 'root' })
export class BulletPointService {

  constructor() {}

  public getOverviewBulletPoints(): Array<BulletPointModel> {
    let array: Array<any> = [];
    if (_overviewBullets && _overviewBullets.payload && Array.isArray(_overviewBullets.payload.bullets)) {
      array = _overviewBullets.payload.bullets;
    }
    return array;
  }
}
