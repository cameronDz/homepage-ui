import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-copyright-footer',
  templateUrl: './copyright-footer.component.html',
  styleUrls: ['./copyright-footer.component.scss']
})
export class CopyrightFooterComponent implements OnInit {

  public readonly COPYRIGHT_TEXT: string = '2020 Cam Dziurgot';

  constructor() {}

  ngOnInit(): void {}

}
