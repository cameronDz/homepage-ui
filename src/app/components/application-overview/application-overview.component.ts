import { Component, Input, OnInit, Output } from '@angular/core';
import { BulletPointModel } from '../bullets-container/bullet-point.model';

@Component({
  selector: 'md-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss']
})
export class ApplicationOverviewComponent implements OnInit {

  private readonly EXPANDED_CLASS_NAME: string = 'expanded-application-content';
  private readonly COLLAPSED_CLASS_NAME: string = 'collapsed-application-content';

  public readonly DEPLOYED_APPLICATION_LINK: string = 'here';
  public readonly DEPLOYED_APPLICATION_TEXT: string = 'Visit the deployed application,';
  public readonly TECHNOLOGY_LIST_TEXT: string = 'List of related pages associate with the application:';
  public readonly TECHNOLOGY_TITLE: string = 'Technologies';

  @Input() deployedUrl: string = '';
  @Input() overviewParagraphs: Array<string> = [];
  @Input() technologyBullets: Array<BulletPointModel> = [];
  @Input() technologyParagraphs: Array<string> = [];
  @Input() title: string = '';

  public expandedStatusClassName: string = '';

  constructor() {}

  ngOnInit(): void {}

  public handleClickedToExpanded(expanded: boolean): void {
    this.expandedStatusClassName = expanded ? this.EXPANDED_CLASS_NAME : this.COLLAPSED_CLASS_NAME;
    console.log('expanded', expanded);
  }

}
