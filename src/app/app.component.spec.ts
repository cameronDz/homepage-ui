import { async, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResourceCardsComponent } from './components/resource-cards/resource-cards.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';

describe('AppComponent', () => {
  const config: TestModuleMetadata = { declarations: [
    AppComponent,
    ResourceCardsComponent,
    ToolbarHeaderComponent
  ] };
  beforeEach(async(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const actual = fixture.nativeElement.querySelector('.content h1').textContent;
    const expected: string = fixture.componentInstance.title;
    expect(actual).toContain(expected);
  });
});
