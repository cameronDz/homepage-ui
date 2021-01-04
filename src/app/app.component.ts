import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BulletPointModel, BulletPointType } from './models/bullet-point.model';
import { BulletPointService } from './services/bullet-point.service';
import { DataOptions } from './models/data-options.model';
import { SubscriptionUtility } from './utilities/subscription.utility';

@Component({
  selector: 'nssd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  public title: string = 'Cam Dziurgot';
  public subtitle: string = 'Software Engineer and DevOps enthusiast. Interests include; America, suits, coffee, and dogs.';

  public showBullets: boolean = false;
  public overviewBullets: Array<BulletPointModel> = [];

  private overviewBulletsSubscription: Subscription = null;

  constructor(private bulletPointService: BulletPointService) {}

  ngOnInit(): void {
    this.overviewBulletsSubscription = this.bulletPointService.getBulletPoints(
      this,
      new DataOptions(BulletPointType.OVERVIEW),
      this.overviewBulletsSuccessCallback,
      this.overviewBulletsErrorCallback,
      this.overviewBulletsCompletedCallback);
  }

  ngOnDestroy(): void {
    SubscriptionUtility.unsubscribe(this.overviewBulletsSubscription);
  }

  private overviewBulletsSuccessCallback(self: AppComponent, data: Array<BulletPointModel>): void {
    self.overviewBullets = data;
    self.showBullets = !!self.overviewBullets && !!self.overviewBullets.length;
  }

  /* used when implementing error handling and loading status */
  private overviewBulletsErrorCallback(self: AppComponent, error: any): void {}
  private overviewBulletsCompletedCallback(self: AppComponent): void {}
}
