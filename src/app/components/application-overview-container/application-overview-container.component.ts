import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApplicationOverviewService } from '../../services/application-overview.service';
import { BulletPointService } from '../../services/bullet-point.service';
import { SubscriptionUtility } from '../../utilities/subscription.utility';

import { ApplicationName, ApplicationOverviewModel } from '../../models/application-overview.model';
import { BulletPointModel, BulletPointType } from '../../models/bullet-point.model';
import { DataOptions } from '../../models/data-options.model';

@Component({
  selector: 'md-application-overview-container',
  templateUrl: './application-overview-container.component.html',
  styleUrls: ['./application-overview-container.component.scss']
})
export class ApplicationOverviewContainerComponent implements OnDestroy, OnInit {

  public readonly APPLICATIONS_HEADER: string = 'Deployed Applications';

  public augmentedOverviewModel: ApplicationOverviewModel;
  public augmentedTechnologyBullets: Array<BulletPointModel>;

  public logNotesOverviewModel: ApplicationOverviewModel;
  public logNotesTechnologyBullets: Array<BulletPointModel>;

  private augmentedApplicationBulletPointsDataSubscription: Subscription = null;
  private augmentedApplicationInformationDataSubscription: Subscription = null;
  private logNotesApplicationBulletPointsDataSubscription: Subscription = null;
  private logNotesApplicationInformationDataSubscription: Subscription = null;

  constructor(private applicationOverviewService: ApplicationOverviewService, private bulletPointService: BulletPointService) {}

  ngOnInit(): void {
    this.retieveAugmentedApplicationBullets();
    this.retieveAugmentedApplicationInformation();
    this.retieveLogNotesApplicationBullets();
    this.retieveLogNotesApplicationInformation();
  }

  ngOnDestroy(): void {
    SubscriptionUtility.unsubscribe(this.augmentedApplicationBulletPointsDataSubscription);
    SubscriptionUtility.unsubscribe(this.augmentedApplicationInformationDataSubscription);
    SubscriptionUtility.unsubscribe(this.logNotesApplicationBulletPointsDataSubscription);
    SubscriptionUtility.unsubscribe(this.logNotesApplicationInformationDataSubscription);
  }

  private retieveAugmentedApplicationInformation(): void {
    SubscriptionUtility.unsubscribe(this.augmentedApplicationInformationDataSubscription);
    this.augmentedApplicationInformationDataSubscription = this.applicationOverviewService.retrieveApplicationInformation(
      this,
      new DataOptions(null, ApplicationName.AUGMENTED),
      this.successfulAugmentedApplicationInformationCallback,
      this.errorAugmentedApplicationInformationCallback,
      this.completedAugmentedApplicationInformationCallback);
  }

  private successfulAugmentedApplicationInformationCallback(self: ApplicationOverviewContainerComponent, data: ApplicationOverviewModel): void {
    self.augmentedOverviewModel = data;
  }

  // TODO implement when retrieving data from API
  private errorAugmentedApplicationInformationCallback(self: ApplicationOverviewContainerComponent, error: any): void {}
  private completedAugmentedApplicationInformationCallback(self: ApplicationOverviewContainerComponent): void {}

  private retieveAugmentedApplicationBullets(): void {
    SubscriptionUtility.unsubscribe(this.augmentedApplicationBulletPointsDataSubscription);
    this.augmentedApplicationBulletPointsDataSubscription = this.bulletPointService.getBulletPoints(
      this,
      new DataOptions(BulletPointType.AUGMENTED_APP),
      this.successfulAugmentedApplicationBulletsCallback,
      this.errorAugmentedApplicationBulletsCallback,
      this.completedAugmentedApplicationBulletsCallback);
  }

  private successfulAugmentedApplicationBulletsCallback(self: ApplicationOverviewContainerComponent, data: Array<BulletPointModel>): void {
    self.augmentedTechnologyBullets = data;
  }

  // TODO implement when retrieving data from API
  private errorAugmentedApplicationBulletsCallback(self: ApplicationOverviewContainerComponent, error: any): void {}
  private completedAugmentedApplicationBulletsCallback(self: ApplicationOverviewContainerComponent): void {}

  private retieveLogNotesApplicationInformation(): void {
    SubscriptionUtility.unsubscribe(this.logNotesApplicationInformationDataSubscription);
    this.logNotesApplicationInformationDataSubscription = this.applicationOverviewService.retrieveApplicationInformation(
      this,
      new DataOptions(null, ApplicationName.ARTICLE_NOTES),
      this.successfulLogNotesApplicationInformationCallback,
      this.errorLogNotesApplicationInformationCallback,
      this.completedLogNotesApplicationInformationCallback);
  }

  private successfulLogNotesApplicationInformationCallback(self: ApplicationOverviewContainerComponent, data: ApplicationOverviewModel): void {
    self.logNotesOverviewModel = data;
  }

  // TODO implement when retrieving data from API
  private errorLogNotesApplicationInformationCallback(self: ApplicationOverviewContainerComponent, error: any): void {}
  private completedLogNotesApplicationInformationCallback(self: ApplicationOverviewContainerComponent): void {}

  private retieveLogNotesApplicationBullets(): void {
    SubscriptionUtility.unsubscribe(this.logNotesApplicationBulletPointsDataSubscription);
    this.logNotesApplicationBulletPointsDataSubscription = this.bulletPointService.getBulletPoints(
      this,
      new DataOptions(BulletPointType.ARTICLE_NOTES_APP),
      this.successfulLogNotesApplicationBulletsCallback,
      this.errorAugmentedLogNotesApplicationBulletsCallback,
      this.completedLogNotesApplicationBulletsCallback);
  }

  private successfulLogNotesApplicationBulletsCallback(self: ApplicationOverviewContainerComponent, data: Array<BulletPointModel>): void {
    self.logNotesTechnologyBullets = data;
  }

  // TODO implement when retrieving data from API
  private errorAugmentedLogNotesApplicationBulletsCallback(self: ApplicationOverviewContainerComponent, error: any): void {}
  private completedLogNotesApplicationBulletsCallback(self: ApplicationOverviewContainerComponent): void {}
}
