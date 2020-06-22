import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleIconComponent } from './collapsible-icon.component';

describe('CollapsibleIconComponent', () => {
  let component: CollapsibleIconComponent;
  let fixture: ComponentFixture<CollapsibleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
