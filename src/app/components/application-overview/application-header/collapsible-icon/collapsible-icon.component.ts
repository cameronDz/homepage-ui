import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'md-collapsible-icon',
  templateUrl: './collapsible-icon.component.html',
  styleUrls: ['./collapsible-icon.component.scss']
})
export class CollapsibleIconComponent implements OnInit {

  private readonly COLLAPSE_TEXT: string = 'Click to Show Less';
  private readonly EXPAND_TEXT: string = 'Click to Expand';
  private readonly ROTATED_IMAGE_CLASS_NAME: string = 'rotated-image';

  public readonly IMAGE_SRC: string = 'assets/images/black-expand-triangle.png';

  @Output() clickedToExpand: EventEmitter<boolean> = new EventEmitter<boolean>();

  public imageClassName: string = this.ROTATED_IMAGE_CLASS_NAME;
  public hoverText: string = this.COLLAPSE_TEXT;

  constructor() {}

  ngOnInit(): void {}

  public handleClick(): void {
    let expanded: boolean;
    if (this.hoverText === this.EXPAND_TEXT) {
      this.hoverText = this.COLLAPSE_TEXT;
      this.imageClassName = this.ROTATED_IMAGE_CLASS_NAME;
      expanded = true;
    } else {
      this.hoverText = this.EXPAND_TEXT;
      this.imageClassName = '';
      expanded = false;
    }

    if (this.clickedToExpand) {
      this.clickedToExpand.emit(expanded);
    }
  }
}
