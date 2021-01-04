import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nssd-copyright-footer',
  templateUrl: './copyright-footer.component.html',
  styleUrls: ['./copyright-footer.component.scss']
})
export class CopyrightFooterComponent implements OnInit {

  private readonly COPYRIGHT_NAME: string = 'Cam Dziurgot';
  public copyrightText: string = '';

  constructor() {}

  ngOnInit(): void {
    const year: number = new Date().getFullYear();
    this.copyrightText = year + ' ' + this.COPYRIGHT_NAME;
  }

}
