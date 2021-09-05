import { ComponentFixture, TestBed, TestModuleMetadata, waitForAsync } from '@angular/core/testing';

import { BulletPointComponent } from './bullet-point.component';

describe('BulletPointComponent', () => {
  let component: BulletPointComponent;
  let fixture: ComponentFixture<BulletPointComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [ BulletPointComponent ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
