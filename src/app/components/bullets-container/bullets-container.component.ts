import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BulletPointModel } from '../../models/bullet-point.model';

@Component({
  selector: 'nssd-bullets-container',
  templateUrl: './bullets-container.component.html'
})
export class BulletsContainerComponent implements OnChanges, OnInit {

  @Input() points: Array<BulletPointModel> = null;

  public hasContent: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setHasContent();
  }

  private setHasContent(): void {
    this.hasContent = Array.isArray(this.points) && !!this.points.length;
  }
}
