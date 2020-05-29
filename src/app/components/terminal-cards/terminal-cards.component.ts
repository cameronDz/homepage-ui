import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'md-terminal-cards',
  templateUrl: './terminal-cards.component.html',
  styleUrls: ['./terminal-cards.component.scss']
})
export class TerminalCardsComponent implements OnInit {

  @Output() outputTerminalButtonClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {}

  public onTerminalButtonClick(event: string): void {
    if (this.outputTerminalButtonClick) {
      this.outputTerminalButtonClick.emit(event);
    }
  }
}
