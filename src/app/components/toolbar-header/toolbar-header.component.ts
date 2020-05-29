import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'md-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss']
})
export class ToolbarHeaderComponent implements OnInit {

  @Input() welcome: string = 'Welcome';
  @Input() goodbye: string = 'Goodbye';

  constructor() { }

  ngOnInit(): void {
  }

}
