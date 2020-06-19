import { Component, OnInit } from '@angular/core';
import { BulletPointModel } from './components/bullets-container/bullet-point.model';
import { BulletPointService } from './components/bullets-container/bullet-point.service';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'Cam Dziurgot';
  public subtitle: string = 'Software Engineer and DevOps enthusiast. Interests include; America, suits, coffee, and dogs.';

  public showBullets: boolean = false;
  public overviewBullets: Array<BulletPointModel> = [];

  constructor(private bulletPointService: BulletPointService) {}

  ngOnInit(): void {
    this.overviewBullets = this.bulletPointService.getOverviewBulletPoints();
    this.showBullets = this.overviewBullets && !!this.overviewBullets.length;
  }
}
