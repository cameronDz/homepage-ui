import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { ApplicationOverviewContainerComponent } from './application-overview-container.component';
import { ApplicationOverviewComponent } from '../application-overview/application-overview.component';
import { BulletPointComponent } from '../bullets-container/bullet-point/bullet-point.component';

describe('ApplicationOverviewContainerComponent', () => {
  let component: ApplicationOverviewContainerComponent;
  let fixture: ComponentFixture<ApplicationOverviewContainerComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      ApplicationOverviewComponent,
      ApplicationOverviewContainerComponent,
      BulletPointComponent
    ]
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
