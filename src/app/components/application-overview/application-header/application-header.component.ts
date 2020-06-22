import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'md-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  @Output() clickedToExpand: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}

  public handleClickedToExpand(expanded: boolean): void {
    if (this.clickedToExpand) {
      this.clickedToExpand.emit(expanded);
    }
    console.log('handleClickedToExpand', expanded);
  }
}
