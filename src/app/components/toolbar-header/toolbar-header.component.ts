import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nssd-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss']
})
export class ToolbarHeaderComponent implements OnInit {

  @Input() welcome: string = '';
  @Input() goodbye: string = '';

  constructor() {}

  ngOnInit(): void {}

}
