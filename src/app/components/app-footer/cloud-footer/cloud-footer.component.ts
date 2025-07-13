import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'nssd-cloud-footer',
  standalone: true,
  styleUrls: ['./cloud-footer.component.scss'],
  templateUrl: './cloud-footer.component.html',
})
export class CloudFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
