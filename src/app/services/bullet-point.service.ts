import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { BulletPointModel, BulletPointType } from '../models/bullet-point.model';
import _overviewBullets from '../../assets/data/overviewBullets.json';
import _augmentedApplicationBullets from '../../assets/data/augmentedApplicationBullets.json';
import _articleNotesApplicationBullets from '../../assets/data/articleNotesApplicationBullets.json';
import { DataOptions } from '../models/data-options.model';

@Injectable({ providedIn: 'root' })
export class BulletPointService {

  constructor() {}

  /**
   * get bullet points data - currently loading data manually, not using API to fetch; subscription not return, callbacks invoked
   * @param self - component calling service
   * @param options - objects with call options
   * @param successCallback -
   * @param errorCallback -
   * @param completedCallback -
   */
  public getBulletPoints(self: any, options: DataOptions, successCallback: any, errorCallback: any, completedCallback: any): Subscription {
    if (options && options.bulletPointSegment === BulletPointType.AUGMENTED_APP && this.isValidPayload(_augmentedApplicationBullets)) {
      successCallback(self, _augmentedApplicationBullets.payload.bullets);
    } else if (options && options.bulletPointSegment === BulletPointType.ARTICLE_NOTES_APP && this.isValidPayload(_articleNotesApplicationBullets)) {
      successCallback(self, _articleNotesApplicationBullets.payload.bullets);
    } else if (options && options.bulletPointSegment === BulletPointType.OVERVIEW && this.isValidPayload(_overviewBullets)) {
      successCallback(self, _overviewBullets.payload.bullets);
    } else {
      errorCallback(self, 'INVALID-SEGMENT');
    }
    completedCallback(self);
    return null;
  }

  public getOverviewBulletPoints(): Array<BulletPointModel> {
    let array: Array<BulletPointModel> = [];
    if (this.isValidPayload(_overviewBullets)) {
      array = _overviewBullets.payload.bullets;
    }
    return array;
  }

  public getAugmentedApplicationBulletPoints(): Array<BulletPointModel> {
    let array: Array<BulletPointModel> = [];
    if (this.isValidPayload(_augmentedApplicationBullets)) {
      array = _augmentedApplicationBullets.payload.bullets;
    }
    return array;
  }

  public getLogNotesApplicationBulletPoints(): Array<BulletPointModel> {
    let array: Array<BulletPointModel> = [];
    if (this.isValidPayload(_articleNotesApplicationBullets)) {
      array = _articleNotesApplicationBullets.payload.bullets;
    }
    return array;
  }

  private isValidPayload(root: any): boolean {
    return Array.isArray(root?.payload?.bullets);
  }
}
