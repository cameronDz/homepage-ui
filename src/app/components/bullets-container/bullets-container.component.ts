import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BulletPointModel } from './bullet-point.model';

@Component({
  selector: 'md-bullets-container',
  templateUrl: './bullets-container.component.html',
  styleUrls: ['./bullets-container.component.scss']
})
export class BulletsContainerComponent implements OnChanges, OnInit {

  @Input() points: Array<BulletPointModel> = [];

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
