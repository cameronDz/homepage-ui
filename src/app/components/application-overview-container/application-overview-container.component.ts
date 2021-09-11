import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ApplicationOverviewModel } from '../../models/application-overview.model';

@Component({
  selector: 'nssd-application-overview-container',
  templateUrl: './application-overview-container.component.html',
  styleUrls: ['./application-overview-container.component.scss']
})
export class ApplicationOverviewContainerComponent implements OnDestroy, OnInit {

  @Input() applications: Array<ApplicationOverviewModel> = [];
  @Input() title: string = 'Deployed Applications';

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
