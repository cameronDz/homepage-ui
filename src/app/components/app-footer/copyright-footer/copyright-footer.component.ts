import { Component, OnInit } from '@angular/core';
import _packageDetails from "../../../../../package.json";
@Component({
  selector: 'nssd-copyright-footer',
  templateUrl: './copyright-footer.component.html',
  styleUrls: ['./copyright-footer.component.scss']
})
export class CopyrightFooterComponent implements OnInit {
  public copyrightText: string = '';

  constructor() {}

  ngOnInit(): void {
    const displayName: string = !!_packageDetails?.author?.name ? `, ${_packageDetails.author.name}` : '';
    const displayVersion: string = !!_packageDetails?.version ? `. v${_packageDetails.version}` : '';
    const displayYear: number = new Date().getFullYear();
    this.copyrightText = `${displayYear}${displayName}${displayVersion}`;
  }
}
