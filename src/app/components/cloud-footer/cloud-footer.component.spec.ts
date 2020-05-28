import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { CloudFooterComponent } from './cloud-footer.component';

describe('CloudFooterComponent', () => {
  let component: CloudFooterComponent;
  let fixture: ComponentFixture<CloudFooterComponent>;
  const config: TestModuleMetadata = {
    declarations: [ CloudFooterComponent ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
