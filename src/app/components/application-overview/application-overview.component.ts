import { Component, Input, OnInit } from '@angular/core';
import { BulletPointModel } from '../bullets-container/bullet-point.model';

@Component({
  selector: 'md-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss']
})
export class ApplicationOverviewComponent implements OnInit {

  public readonly TECHNOLOGY_LIST_TEXT: string = 'List of related pages associate with the application:';
  public readonly TECHNOLOGY_TITLE: string = 'Technologies';
  public readonly VISIT_DEPLOYED_APPLICATION_TEXT: string = 'Visit the deployed application here;';

  @Input() deployedUrl: string = '';
  @Input() overviewParagraphs: Array<string> = [];
  @Input() technologyBullets: Array<BulletPointModel> = [];
  @Input() technologyParagraphs: Array<string> = [];
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}

}
