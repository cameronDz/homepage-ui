import { Component, OnInit } from '@angular/core';
import { CloudFooterComponent } from './cloud-footer/cloud-footer.component';
import { CopyrightFooterComponent } from './copyright-footer/copyright-footer.component';

@Component({
  imports: [
    CloudFooterComponent,
    CopyrightFooterComponent,
  ],
  selector: 'nssd-app-footer',
  standalone: true,
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
