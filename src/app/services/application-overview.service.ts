import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from "../models/types";

@Injectable({ providedIn: 'root' })
export class ApplicationOverviewService {

  constructor(private httpClient: HttpClient) { }

  public loadData(): Observable<DataResponse> {
    return this.httpClient.get<DataResponse>('./assets/data.json');
  }
}
