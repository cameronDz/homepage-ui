import { Injectable } from '@angular/core';
import { ApplicationOverviewModel } from './application-overview.model';
import * as _applicationOverviews from '../../../assets/data/applicationOverviews.json';

enum ApplicationName {
  AUGMENTED = 'augments',
  LOG_NOTES = 'logNotes'
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationOverviewService {

  constructor() { }

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
    return root && root.payload && root.payload[applicationName];
  }
}
