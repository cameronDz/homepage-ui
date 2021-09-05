import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CopyrightFooterComponent } from './copyright-footer.component';

describe('CopyrightFooterComponent', () => {
  let component: CopyrightFooterComponent;
  let fixture: ComponentFixture<CopyrightFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ declarations: [ CopyrightFooterComponent ] }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
