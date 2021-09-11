import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { onCompleteCallback, onErrorCallback, onSuccessCallback } from '../models/types';

@Injectable({ providedIn: 'root' })
export class HttpsRequestService {
  private readonly placeholder: string = '${endpoint}';
  private readonly GET_URL: string = 'https://homepage-storage-api.herokuapp.com/json/object/${endpoint}';

  constructor(private httpClient: HttpClient) {}

  protected getData(
      self: any,
      source: string,
      successCallback: onSuccessCallback,
      errorCallback: onErrorCallback,
      completedCallback: onCompleteCallback): Subscription {
    return this.httpClient.get(this.GET_URL.replace(this.placeholder, source), {})
      .pipe(finalize((): void => {
          completedCallback(self);
      }))
      .subscribe((data: any): void => {
          successCallback(self, data);
      },
      (error: any): void => {
          errorCallback(self, error);
      });
  }
}
