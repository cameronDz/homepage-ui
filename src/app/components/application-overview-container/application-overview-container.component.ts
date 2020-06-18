import { Component, OnInit } from '@angular/core';
import { ApplicationOverviewService } from '../application-overview/application-overview.service';
import { BulletPointService } from '../bullets-container/bullet-point.service';
import { ApplicationOverviewModel } from '../application-overview/application-overview.model';
import { BulletPointModel } from '../bullets-container/bullet-point.model';

@Component({
  selector: 'md-application-overview-container',
  templateUrl: './application-overview-container.component.html',
  styleUrls: ['./application-overview-container.component.scss']
})
export class ApplicationOverviewContainerComponent implements OnInit {

  public overviewModel: ApplicationOverviewModel;
  public technologyBullets: Array<BulletPointModel>;

  constructor(private applicationOverviewService: ApplicationOverviewService, private bulletPointService: BulletPointService) {}

  ngOnInit(): void {
    this.overviewModel = this.applicationOverviewService.getAugmentedApplicationInformation();
    this.technologyBullets = this.bulletPointService.getAugmentedApplicationBulletPoints();
    console.log('this.overviewModel', this.overviewModel);
  }

}
