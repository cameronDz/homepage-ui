import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApplicationName, ApplicationOverviewModel } from '../models/application-overview.model';
import { DataOptions } from '../models/data-options.model';
import * as _applicationOverviews from '../../assets/data/applicationOverviews.json';

@Injectable({ providedIn: 'root' })
export class ApplicationOverviewService {

  constructor() { }

  public retrieveApplicationInformation(self: any, options: DataOptions, successCallback: any, errorCallback: any, completedCallback: any): Subscription {
    if (!!options && options.applicationName === ApplicationName.AUGMENTED) {
      successCallback(self, this.getApplicationInformation(ApplicationName.AUGMENTED));
    } else if (!!options && options.applicationName === ApplicationName.LOG_NOTES) {
      successCallback(self, this.getApplicationInformation(ApplicationName.LOG_NOTES));
    } else {
      errorCallback(self, 'INVALID-OPTIONS');
    }
    completedCallback(self);
    return null;
  }

  public getAugmentedApplicationInformation(): ApplicationOverviewModel {
    return this.getApplicationInformation(ApplicationName.AUGMENTED);
  }

  public getLogNotesApplicationInformation(): ApplicationOverviewModel {
    return this.getApplicationInformation(ApplicationName.LOG_NOTES);
  }

  private getApplicationInformation(applicationName: ApplicationName): ApplicationOverviewModel {
    let model: ApplicationOverviewModel = new ApplicationOverviewModel();
    if (this.hasApplicationModel(_applicationOverviews, applicationName)) {
      model = _applicationOverviews.payload[applicationName];
    }
    return model;
  }

  private hasApplicationModel(root: any, applicationName: ApplicationName): boolean {
    return root && root.default && root.default.payload && root.default.payload[applicationName];
  }
}
