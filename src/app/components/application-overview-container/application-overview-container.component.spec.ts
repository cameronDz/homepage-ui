import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { ApplicationOverviewContainerComponent } from './application-overview-container.component';
import { ApplicationOverviewComponent } from '../application-overview/application-overview.component';
import { BulletPointComponent } from '../bullets-container/bullet-point/bullet-point.component';
import { ApplicationHeaderComponent } from '../application-overview/application-header/application-header.component';
import { CollapsibleIconComponent } from '../application-overview/application-header/collapsible-icon/collapsible-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ApplicationOverviewContainerComponent', () => {
  let component: ApplicationOverviewContainerComponent;
  let fixture: ComponentFixture<ApplicationOverviewContainerComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      ApplicationHeaderComponent,
      ApplicationOverviewComponent,
      ApplicationOverviewContainerComponent,
      CollapsibleIconComponent,
      BulletPointComponent
    ],
    imports: [ BrowserAnimationsModule ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
