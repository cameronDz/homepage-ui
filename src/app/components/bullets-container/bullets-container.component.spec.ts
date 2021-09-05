import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulletsContainerComponent } from './bullets-container.component';

describe('BulletsContainerComponent', () => {
  let component: BulletsContainerComponent;
  let fixture: ComponentFixture<BulletsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
