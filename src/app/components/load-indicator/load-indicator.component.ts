import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'nssd-load-indicator',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './load-indicator.component.html',
  styleUrls: ['./load-indicator.component.scss']
})
export class LoadIndicatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
