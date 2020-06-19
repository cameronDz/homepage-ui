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

  public augmentedOverviewModel: ApplicationOverviewModel;
  public augmentedTechnologyBullets: Array<BulletPointModel>;

  public logNotesOverviewModel: ApplicationOverviewModel;
  public logNotesTechnologyBullets: Array<BulletPointModel>;

  constructor(private applicationOverviewService: ApplicationOverviewService, private bulletPointService: BulletPointService) {}

  ngOnInit(): void {
    this.augmentedOverviewModel = this.applicationOverviewService.getAugmentedApplicationInformation();
    this.augmentedTechnologyBullets = this.bulletPointService.getAugmentedApplicationBulletPoints();

    this.logNotesOverviewModel = this.applicationOverviewService.getLogNotesApplicationInformation();
    this.logNotesTechnologyBullets = this.bulletPointService.getLogNotesApplicationBulletPoints();
  }
}
