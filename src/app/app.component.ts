import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BulletPointModel, BulletPointType } from './models/bullet-point.model';
import { BulletPointService } from './services/bullet-point.service';
import { DataOptions } from './models/data-options.model';
import { SubscriptionUtility } from './utilities/subscription.utility';
import { ApplicationOverviewModel } from './models/application-overview.model';

@Component({
  selector: 'nssd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  public isLoading = false;

  public deployedApplications: Array<ApplicationOverviewModel> = [];
  public overviewBullets: Array<BulletPointModel> = [];
  public subtitle: string = 'Software Engineer and DevOps enthusiast. Interests include; America, suits, coffee, and dogs.';
  public title: string = 'Cam Dziurgot';

  private overviewBulletsSubscription: Subscription = null;

  constructor(private bulletPointService: BulletPointService) {}

  ngOnInit(): void {
    this.getOverviewBulletPoints();
  }

  ngOnDestroy(): void {
    SubscriptionUtility.unsubscribe(this.overviewBulletsSubscription);
  }

  private getOverviewBulletPoints(): void {
    SubscriptionUtility.unsubscribe(this.overviewBulletsSubscription);
    this.overviewBulletsSubscription = this.bulletPointService.getBulletPoints(
      this,
      new DataOptions(BulletPointType.OVERVIEW),
      this.overviewBulletsSuccessCallback,
      this.overviewBulletsErrorCallback,
      this.overviewBulletsCompletedCallback);
  }

  private overviewBulletsSuccessCallback(self: AppComponent, data: Array<BulletPointModel>): void {
    self.overviewBullets = data;
  }

  /* used when implementing error handling is loading */
  private overviewBulletsErrorCallback(self: AppComponent, error: any): void {}
  private overviewBulletsCompletedCallback(self: AppComponent): void {}
}
