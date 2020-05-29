import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedFooterComponent } from './linked-footer.component';

describe('LinkedFooterComponent', () => {
  let component: LinkedFooterComponent;
  let fixture: ComponentFixture<LinkedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
