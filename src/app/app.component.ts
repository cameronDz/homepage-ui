import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { BulletPointModel } from './models/bullet-point.model';
import { ApplicationOverviewService } from "./services/application-overview.service";
import { SubscriptionUtility } from './utilities/subscription.utility';
import { ApplicationOverviewModel } from './models/application-overview.model';
import { LoadIndicatorComponent } from './components/load-indicator/load-indicator.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ApplicationOverviewContainerComponent } from './components/application-overview-container/application-overview-container.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { BulletsContainerComponent } from './components/bullets-container/bullets-container.component';

@Component({
  imports: [
    AppFooterComponent,
    ApplicationOverviewContainerComponent,
    BulletsContainerComponent,
    CommonModule,
    LoadIndicatorComponent,
    ToolbarHeaderComponent
  ],
  selector: 'nssd-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy, OnInit {
  public errorHeader = 'Unable to fetch page data.';
  public errorMessage = '';

  public isError = false;
  public isLoading = false;

  public applications: Array<ApplicationOverviewModel> = [];
  public overviewBullets: Array<BulletPointModel> = [];
  public subtitle: string = '';
  public title: string = '';

  private applicationOverviewSubscription: Subscription = null;

  constructor(private applicationOverviewService: ApplicationOverviewService) { }

  ngOnInit(): void {
    this.getApplicationOverviewData();
  }

  ngOnDestroy(): void {
    SubscriptionUtility.unsubscribe(this.applicationOverviewSubscription);
  }

  private getApplicationOverviewData(): void {
    SubscriptionUtility.unsubscribe(this.applicationOverviewSubscription);
    this.isLoading = true;
    this.isError = false;

    this.applicationOverviewSubscription = this.applicationOverviewService.loadData()
      .subscribe({
        next: (data) => {
          this.applications = (data?.deployedApplications || []).map(app =>
            new ApplicationOverviewModel(
              app.title,
              app.overviewParagraphs,
              app.technologyParagraphs,
              app.deployedUrl,
              app.bullets.map(bullet =>
                new BulletPointModel(
                  bullet.message,
                  bullet.iconTitle,
                  bullet.iconHref || '',
                  bullet.iconHref,
                  bullet.iconHrefTargetBlank
                )
              )
            )
          );
          this.overviewBullets = (data?.overviewBullets || []).map(bullet =>
            new BulletPointModel(
              bullet.message,
              bullet.iconTitle,
              bullet.iconSrc,
              bullet.iconHref,
              bullet.iconHrefTargetBlank
            )
          );
          this.subtitle = data?.subtitle || '';
          this.title = data?.title || '';
        },
        error: (error) => {
          this.isError = true;
          this.errorMessage = error?.statusText || '';
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }
}
