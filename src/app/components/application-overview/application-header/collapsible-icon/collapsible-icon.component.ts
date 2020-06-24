import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

enum TriangleState {
  CLOSED = 'close',
  OPEN = 'open'
}

@Component({
  selector: 'md-collapsible-icon',
  templateUrl: './collapsible-icon.component.html',
  styleUrls: ['./collapsible-icon.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state(TriangleState.OPEN, style({ transform: 'rotate(90deg)' })),
      state(TriangleState.CLOSED, style({ transform: 'rotate(0deg)' })),
      transition(`${TriangleState.CLOSED} => ${TriangleState.OPEN}`, animate('250ms ease-out')),
      transition(`${TriangleState.OPEN} => ${TriangleState.CLOSED}`, animate('250ms ease-in'))
    ])
  ]
})
export class CollapsibleIconComponent implements OnInit {

  private readonly COLLAPSE_TEXT: string = 'Click to Show Less';
  private readonly EXPAND_TEXT: string = 'Click to Expand';

  public readonly IMAGE_SRC: string = 'assets/images/black-expand-triangle.png';

  @Output() clickedToExpand: EventEmitter<boolean> = new EventEmitter<boolean>();

  public hoverText: string = this.COLLAPSE_TEXT;
  public triangleState: TriangleState = TriangleState.OPEN;

  constructor() {}

  ngOnInit(): void {}

  public handleClick(): void {
    this.triangleState = (this.triangleState === TriangleState.OPEN) ? TriangleState.CLOSED : TriangleState.OPEN;
    this.hoverText = (this.triangleState === TriangleState.OPEN) ? this.COLLAPSE_TEXT : this.EXPAND_TEXT;

    if (this.clickedToExpand) {
      this.clickedToExpand.emit(this.triangleState === TriangleState.OPEN);
    }
  }
}
