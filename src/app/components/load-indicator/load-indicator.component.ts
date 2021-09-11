import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'nssd-load-indicator',
  templateUrl: './load-indicator.component.html',
  styleUrls: ['./load-indicator.component.scss']
})
export class LoadIndicatorComponent implements OnInit {

  public color: ThemePalette = 'primary';
  public mode: ProgressSpinnerMode = 'indeterminate';
  public value = 50;
  constructor() {}

  ngOnInit(): void {}
}
