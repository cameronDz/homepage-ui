import { Component, EventEmitter, OnChanges, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TextState } from '../../text-state.enum';
import { ApplicationOverviewText } from '../../application-overview-text.enum';

@Component({
  selector: 'md-collapsible-icon',
  templateUrl: './collapsible-icon.component.html',
  styleUrls: ['./collapsible-icon.component.scss'],
  animations: [
    trigger('rotatedState', [
      state(TextState.EXPANDED, style({ transform: 'rotate(90deg)' })),
      state(TextState.COLLAPSED, style({ transform: 'rotate(0deg)' })),
      transition(`${TextState.COLLAPSED} => ${TextState.EXPANDED}`, animate('250ms ease-out')),
      transition(`${TextState.EXPANDED} => ${TextState.COLLAPSED}`, animate('250ms ease-in'))
    ])
  ]
})
export class CollapsibleIconComponent implements OnChanges, OnInit {

  private readonly COLLAPSE_TEXT: string = ApplicationOverviewText.CLICK_TO_COLLAPSE_TEXT;
  private readonly EXPAND_TEXT: string = ApplicationOverviewText.CLICK_TO_EXPAND_TEXT;

  public readonly IMAGE_SRC: string = 'assets/images/black-expand-triangle.png';

  @Input() textState: TextState = TextState.EXPANDED;
  @Output() clickedToExpand: EventEmitter<TextState> = new EventEmitter<TextState>();

  public hoverText: string = this.COLLAPSE_TEXT;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.hoverText = (this.textState === TextState.EXPANDED) ? this.COLLAPSE_TEXT : this.EXPAND_TEXT;
    }
  }

  public handleClick(): void {
    const updateTextState: TextState = (this.textState === TextState.EXPANDED) ? TextState.COLLAPSED : TextState.EXPANDED;
    if (this.clickedToExpand) {
      this.clickedToExpand.emit(updateTextState);
    }
  }
}
