import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCardLinkComponent } from './circle-card-link.component';

describe('CircleCardLinkComponent', () => {
  let component: CircleCardLinkComponent;
  let fixture: ComponentFixture<CircleCardLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleCardLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCardLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
