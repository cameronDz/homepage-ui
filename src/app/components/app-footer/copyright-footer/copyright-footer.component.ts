import { Component, OnInit } from '@angular/core';
import _packageDetails from "../../../../../package.json";
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'nssd-copyright-footer',
  standalone: true,
  styleUrls: ['./copyright-footer.component.scss'],
  templateUrl: './copyright-footer.component.html',
})
export class CopyrightFooterComponent implements OnInit {
  public copyrightText: string = '';

  constructor() { }

  ngOnInit(): void {
    const displayName: string = !!_packageDetails?.author?.name ? `, ${_packageDetails.author.name}` : '';
    const displayVersion: string = !!_packageDetails?.version ? `. v${_packageDetails.version}` : '';
    const displayYear: number = new Date().getFullYear();
    this.copyrightText = `${displayYear}${displayName}${displayVersion}`;
  }
}
