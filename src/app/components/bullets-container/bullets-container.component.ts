import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BulletPointModel } from '../../models/bullet-point.model';
import { BulletPointComponent } from './bullet-point/bullet-point.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    BulletPointComponent,
    CommonModule,
  ],
  selector: 'nssd-bullets-container',
  standalone: true,
  templateUrl: './bullets-container.component.html'
})
export class BulletsContainerComponent implements OnChanges, OnInit {

  @Input() points: Array<BulletPointModel> = null;

  public hasContent: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.setHasContent();
  }

  private setHasContent(): void {
    this.hasContent = Array.isArray(this.points) && !!this.points.length;
  }
}
