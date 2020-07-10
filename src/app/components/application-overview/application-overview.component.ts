import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BulletPointModel } from '../bullets-container/bullet-point.model';
import { TextState } from './text-state.enum';
import { ApplicationOverviewText } from './application-overview-text.enum';

@Component({
  selector: 'md-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss'],
  animations: [
    trigger('overviewTextState', [
      state(TextState.EXPANDED, style({ height: '*' })),
      state(TextState.COLLAPSED, style({
        webkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        height: '90px' })),
      transition(`${TextState.COLLAPSED} => ${TextState.EXPANDED}`, animate('750ms ease-out')),
      transition(`${TextState.EXPANDED} => ${TextState.COLLAPSED}`, animate('750ms ease-in'))
    ])
  ]
})
export class ApplicationOverviewComponent implements OnInit {

  private readonly EXPANDED_TEXT: string = ApplicationOverviewText.CLICK_TO_COLLAPSE_TEXT;
  private readonly COLLAPSED_TEXT: string = ApplicationOverviewText.CLICK_TO_EXPAND_TEXT;

  public readonly DEPLOYED_APPLICATION_LINK: string = 'here';
  public readonly DEPLOYED_APPLICATION_TEXT: string = 'Visit the deployed application,';
  public readonly TECHNOLOGY_LIST_TEXT: string = 'List of related pages associate with the application:';
  public readonly TECHNOLOGY_TITLE: string = 'Technologies';

  @Input() deployedUrl: string = '';
  @Input() overviewParagraphs: Array<string> = [];
  @Input() technologyBullets: Array<BulletPointModel> = [];
  @Input() technologyParagraphs: Array<string> = [];
  @Input() title: string = '';

  public currentExpandCollapseText: string = this.COLLAPSED_TEXT;
  public textState: TextState = TextState.COLLAPSED;

  constructor() {}

  ngOnInit(): void {}

  public handleClickedToExpanded(newState: TextState): void {
    this.updateExpandCollapseStatus(newState);
  }

  public handleExpandCollapseButtonClick(): void {
    const newState: TextState = (this.textState === TextState.EXPANDED) ? TextState.COLLAPSED : TextState.EXPANDED;
    this.updateExpandCollapseStatus(newState);
  }

  private updateExpandCollapseStatus(newState: TextState): void {
    this.textState = newState;
    this.currentExpandCollapseText = (this.textState === TextState.EXPANDED) ? this.EXPANDED_TEXT : this.COLLAPSED_TEXT;
  }
}
