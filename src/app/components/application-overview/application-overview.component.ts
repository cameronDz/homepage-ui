import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BulletPointModel } from '../bullets-container/bullet-point.model';
import { TextState } from './text-state.enum';

@Component({
  selector: 'md-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss'],
  animations: [
    trigger('overviewTextState', [
      state(TextState.EXPANDED, style({ height: '*' })),
      state(TextState.COLLAPSED, style({ height: '90px' })),
      transition(`${TextState.COLLAPSED} => ${TextState.EXPANDED}`, animate('750ms ease-out')),
      transition(`${TextState.EXPANDED} => ${TextState.COLLAPSED}`, animate('750ms ease-in'))
    ])
  ]
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
  public textState: TextState = TextState.EXPANDED;

  constructor() {}

  ngOnInit(): void {}

  public handleClickedToExpanded(updateTextState: TextState): void {
    this.textState = updateTextState;
    this.expandedStatusClassName = updateTextState === TextState.EXPANDED ? this.EXPANDED_CLASS_NAME : this.COLLAPSED_CLASS_NAME;
  }

}
