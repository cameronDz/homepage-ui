import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { HttpsRequestService } from './https-request.service';
import { ApplicationName, ApplicationOverviewModel } from '../models/application-overview.model';
import { DataOptions } from '../models/data-options.model';
import { onCompleteCallback, onErrorCallback, onSuccessCallback } from "../models/types";
import _applicationOverviews from '../../assets/data/applicationOverviews.json';

@Injectable({ providedIn: 'root' })
export class ApplicationOverviewService extends HttpsRequestService {
  private readonly ALL_DATA_SOURCE = "applicationData";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public retrieveAllApplicationData(
      self: any,
      successCallback: onSuccessCallback,
      errorCallback: onErrorCallback,
      completedCallback: onCompleteCallback): Subscription {
    return this.getData(self, this.ALL_DATA_SOURCE, successCallback, errorCallback, completedCallback)
  }

  public retrieveApplicationInformation(self: any, options: DataOptions, successCallback: any, errorCallback: any, completedCallback: any): Subscription {
    if (!!options && options.applicationName === ApplicationName.AUGMENTED) {
      successCallback(self, this.getApplicationInformation(ApplicationName.AUGMENTED));
    } else if (!!options && options.applicationName === ApplicationName.ARTICLE_NOTES) {
      successCallback(self, this.getApplicationInformation(ApplicationName.ARTICLE_NOTES));
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
    return this.getApplicationInformation(ApplicationName.ARTICLE_NOTES);
  }

  private getApplicationInformation(applicationName: ApplicationName): ApplicationOverviewModel {
    let model: ApplicationOverviewModel = new ApplicationOverviewModel();
    if (this.hasApplicationModel(_applicationOverviews, applicationName)) {
      model = _applicationOverviews.payload[applicationName];
    }
    return model;
  }

  private hasApplicationModel(root: any, applicationName: ApplicationName): boolean {
    return root?.payload && root.payload[applicationName];
  }
}
