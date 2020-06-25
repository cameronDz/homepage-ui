import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextState } from '../text-state.enum';

@Component({
  selector: 'md-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  @Output() clickedToExpand: EventEmitter<TextState> = new EventEmitter<TextState>();

  @Input() textState: TextState = TextState.EXPANDED;
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}

  public handleClickedToExpand(currentTextState: TextState): void {
    if (this.clickedToExpand) {
      this.clickedToExpand.emit(currentTextState);
    }
  }
}
