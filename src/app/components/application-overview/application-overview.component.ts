import { Component, Input, OnInit } from '@angular/core';
import { BulletPointModel } from '../bullets-container/bullet-point.model';

@Component({
  selector: 'md-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss']
})
export class ApplicationOverviewComponent implements OnInit {

  public readonly TECHNOLOGY_TITLE: string = 'Technologies';

  @Input() overviewParagraphs: Array<string> = [];
  @Input() technologyBullets: Array<BulletPointModel> = [];
  @Input() technologyParagraphs: Array<string> = [];
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}

}
