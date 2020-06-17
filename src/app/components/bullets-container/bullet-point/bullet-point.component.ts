import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

enum InputProperty {
  ICON_HREF_TARGET_BLANK = 'iconHrefTargetBlank'
}

@Component({
  selector: 'md-bullet-point',
  templateUrl: './bullet-point.component.html',
  styleUrls: ['./bullet-point.component.scss']
})
export class BulletPointComponent implements OnChanges, OnInit {

  private readonly SELF_TARGET: string = '_self';
  private readonly BLANK_TARGET: string = '_blank';
  @Input() iconHref: string = '';
  @Input() iconHrefTargetBlank: boolean = false;
  @Input() iconSrc: string = '';
  @Input() iconTitle: string = '';
  @Input() message: string = '';

  public target: string = this.SELF_TARGET;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes[InputProperty.ICON_HREF_TARGET_BLANK]) {
      this.target = this.iconHrefTargetBlank ? this.BLANK_TARGET : this.SELF_TARGET;
    }
  }

}
