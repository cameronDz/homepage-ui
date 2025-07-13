import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'nssd-toolbar-header',
  standalone: true,
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss']
})
export class ToolbarHeaderComponent implements OnInit {

  @Input() welcome: string = '';
  @Input() goodbye: string = '';

  constructor() { }

  ngOnInit(): void { }

}
