import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { AppFooterComponent } from './app-footer.component';
import { CloudFooterComponent } from './cloud-footer/cloud-footer.component';
import { CopyrightFooterComponent } from './copyright-footer/copyright-footer.component';

describe('AppFooterComponent', () => {
  let component: AppFooterComponent;
  let fixture: ComponentFixture<AppFooterComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      AppFooterComponent,
      CloudFooterComponent,
      CopyrightFooterComponent]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
