import { Injectable } from '@angular/core';
import { BulletPointModel } from './bullet-point.model';
import * as _overviewBullets from '../../../assets/data/overviewBullets.json';
import * as _augmentedApplicationBullets from '../../../assets/data/augmentedApplicationBullets.json';
import * as _logNotesApplicationBullets from '../../../assets/data/logNotesApplicationBullets.json';

@Injectable({ providedIn: 'root' })
export class BulletPointService {

  constructor() {}

  public getOverviewBulletPoints(): Array<BulletPointModel> {
    let array: Array<any> = [];
    if (this.isValidPayload(_overviewBullets)) {
      array = _overviewBullets.payload.bullets;
    }
    return array;
  }

  public getAugmentedApplicationBulletPoints(): Array<BulletPointModel> {
    let array: Array<any> = [];
    if (this.isValidPayload(_augmentedApplicationBullets)) {
      array = _augmentedApplicationBullets.payload.bullets;
    }
    return array;
  }

  public getLogNotesApplicationBulletPoints(): Array<BulletPointModel> {
    let array: Array<any> = [];
    if (this.isValidPayload(_logNotesApplicationBullets)) {
      array = _logNotesApplicationBullets.payload.bullets;
    }
    return array;
  }

  private isValidPayload(root: any): boolean {
    return root && root.payload && Array.isArray(root.payload.bullets);
  }
}
