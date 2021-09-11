import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { HttpsRequestService } from './https-request.service';
import { onCompleteCallback, onErrorCallback, onSuccessCallback } from "../models/types";

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
}
