import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationOverviewModel } from '../../models/application-overview.model';
import { ApplicationOverviewComponent } from '../application-overview/application-overview.component';

@Component({
  imports: [
    ApplicationOverviewComponent,
    CommonModule,
  ],
  selector: 'nssd-application-overview-container',
  templateUrl: './application-overview-container.component.html',
  styleUrls: ['./application-overview-container.component.scss']
})
export class ApplicationOverviewContainerComponent implements OnDestroy, OnInit {

  @Input() applications: Array<ApplicationOverviewModel> = [];
  @Input() title: string = 'Deployed Applications';

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
