import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BulletPointModel } from './models/bullet-point.model';
import { ApplicationOverviewService } from "./services/application-overview.service";
import { SubscriptionUtility } from './utilities/subscription.utility';
import { ApplicationOverviewModel } from './models/application-overview.model';

@Component({
  selector: 'nssd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  public isLoading = false;

  public applications: Array<ApplicationOverviewModel> = [];
  public overviewBullets: Array<BulletPointModel> = [];
  public subtitle: string = '';
  public title: string = '';

  private applicationOverviewSubscription: Subscription = null;

  constructor(private applicationOverviewService: ApplicationOverviewService) {}

  ngOnInit(): void {
    this.getApplicationOverviewData();
  }

  ngOnDestroy(): void {
    SubscriptionUtility.unsubscribe(this.applicationOverviewSubscription);
  }

  private getApplicationOverviewData(): void {
    SubscriptionUtility.unsubscribe(this.applicationOverviewSubscription);
    this.isLoading = true;
    this.applicationOverviewSubscription = this.applicationOverviewService.retrieveAllApplicationData(
      this,
      this.callbackApplicationOverviewSuccess,
      this.callbackApplicationOverviewError,
      this.callbackApplicationOverviewCompleted);
  }

  private callbackApplicationOverviewSuccess(self: AppComponent, data: any): void {
    self.applications = data?.payload?.deployedApplications || [];
    self.overviewBullets = data?.payload?.overviewBullets || [];
    self.subtitle = data?.payload?.subtitle || '';
    self.title = data?.payload?.title || '';
  }

  private callbackApplicationOverviewError(self: AppComponent, error: any): void {
    /* TODO set up error handling */
  }

  private callbackApplicationOverviewCompleted(self: AppComponent): void {
    self.isLoading = false;
  }
}
