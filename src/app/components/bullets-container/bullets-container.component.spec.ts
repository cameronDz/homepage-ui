import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletsContainerComponent } from './bullets-container.component';

describe('BulletsContainerComponent', () => {
  let component: BulletsContainerComponent;
  let fixture: ComponentFixture<BulletsContainerComponent>;

  beforeEach(async(() => {
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
