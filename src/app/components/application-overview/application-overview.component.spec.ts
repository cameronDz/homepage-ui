import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOverviewComponent } from './application-overview.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';

describe('ApplicationOverviewComponent', () => {
  let component: ApplicationOverviewComponent;
  let fixture: ComponentFixture<ApplicationOverviewComponent>;
  const testConfig: any = {
    declarations: [
      ApplicationHeaderComponent,
      ApplicationOverviewComponent
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
