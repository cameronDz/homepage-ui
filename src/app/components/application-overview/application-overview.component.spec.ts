
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApplicationOverviewComponent } from './application-overview.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { CollapsibleIconComponent } from './application-header/collapsible-icon/collapsible-icon.component';
import { BulletPointModel } from '../../models/bullet-point.model';
import { BulletPointComponent } from '../bullets-container/bullet-point/bullet-point.component';

@Component({ template:
  `<div *ngIf="showComponent">
    <nssd-application-overview
      [title]="title"
      [deployedUrl]="deployedUrl"
      [overviewParagraphs]="stringArray"
      [technologyParagraphs]="stringArray"
      [title]="title"
      [technologyBullets]="technologyBullets">
    </nssd-application-overview>
  </div>` })
  class TestWrapperComponent {
    public showComponent: boolean = false;
    public title: string = 'Title Test';
    public deployedUrl: string = 'http://www.string.com';
    public stringArray: Array<string> = ['one one one', 'two two two'];
    public technologyBullets: Array<BulletPointModel> = [
      new BulletPointModel('testing', 'icon title', 'src/image.png', 'href', false)
    ];
  }

describe('ApplicationOverviewComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  const testConfig: any = {
    declarations: [
      ApplicationHeaderComponent,
      ApplicationOverviewComponent,
      BulletPointComponent,
      CollapsibleIconComponent,
      TestWrapperComponent
    ],
    imports: [ BrowserAnimationsModule ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.showComponent = true;
    fixture.detectChanges();

    const actual: any = fixture.debugElement.query(By.css('div div'));
    expect(actual).toBeTruthy();
  });

  // TODO determine how to query the collapsed div
  xit('single click, expanded flag in wrapper is false', () => {
    component.showComponent = true;
    fixture.detectChanges();

    fixture.debugElement.query(By.css('div img')).nativeElement.click();
    fixture.detectChanges();

    const actual: any = fixture.debugElement.query(By.css('div .collapsed-application-content'));
    expect(actual).toBeTruthy();
  });

  // TODO determine how to query the expanded div
  xit('double click, expanded flag in wrapper is true', () => {
    component.showComponent = true;
    fixture.detectChanges();

    fixture.debugElement.query(By.css('div img')).nativeElement.click();
    fixture.debugElement.query(By.css('div img')).nativeElement.click();
    fixture.detectChanges();

    const actual: any = fixture.debugElement.query(By.css('div .expanded-application-content'));
    expect(actual).toBeTruthy();
  });
});
