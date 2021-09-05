import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResourceCardsComponent } from './resource-cards.component';
import { RightArrowSvgComponent } from './right-arrow-svg/right-arrow-svg.component';

describe('ResourceCardsComponent', () => {
  let component: ResourceCardsComponent;
  let fixture: ComponentFixture<ResourceCardsComponent>;
  const testConfig: any = {
    declarations: [
      ResourceCardsComponent,
      RightArrowSvgComponent
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
