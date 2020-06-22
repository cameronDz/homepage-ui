import { async, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResourceCardsComponent } from './components/resource-cards/resource-cards.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { ApplicationOverviewComponent } from './components/application-overview/application-overview.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { CloudFooterComponent } from './components/app-footer/cloud-footer/cloud-footer.component';
import { CopyrightFooterComponent } from './components/app-footer/copyright-footer/copyright-footer.component';
import { BulletsContainerComponent } from './components/bullets-container/bullets-container.component';
import { BulletPointComponent } from './components/bullets-container/bullet-point/bullet-point.component';
import { ApplicationOverviewContainerComponent } from './components/application-overview-container/application-overview-container.component';
import { ApplicationHeaderComponent } from './components/application-overview/application-header/application-header.component';

describe('AppComponent', () => {
  const config: TestModuleMetadata = {
    declarations: [
      AppComponent,
      AppFooterComponent,
      ApplicationHeaderComponent,
      ApplicationOverviewComponent,
      ApplicationOverviewContainerComponent,
      BulletsContainerComponent,
      BulletPointComponent,
      CloudFooterComponent,
      CopyrightFooterComponent,
      ResourceCardsComponent,
      ToolbarHeaderComponent
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const actual = fixture.nativeElement.querySelector('.content h1').textContent;
    const expected: string = fixture.componentInstance.title;
    expect(actual).toContain(expected);
  });
});
