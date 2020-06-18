import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOverviewContainerComponent } from './application-overview-container.component';

describe('ApplicationOverviewContainerComponent', () => {
  let component: ApplicationOverviewContainerComponent;
  let fixture: ComponentFixture<ApplicationOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationOverviewContainerComponent ]
    })
    .compileComponents();
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
