import { async, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CircleCardLinkComponent } from './components/circle-card-link/circle-card-link.component';
import { CloudFooterComponent } from './components/cloud-footer/cloud-footer.component';
import { LinkedFooterComponent } from './components/linked-footer/linked-footer.component';
import { ResourceCardsComponent } from './components/resource-cards/resource-cards.component';
import { TerminalCardsComponent } from './components/terminal-cards/terminal-cards.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';

describe('AppComponent', () => {
  const config: TestModuleMetadata = { declarations: [
    AppComponent,
    CircleCardLinkComponent,
    CloudFooterComponent,
    LinkedFooterComponent,
    ResourceCardsComponent,
    TerminalCardsComponent,
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
    const compiled = fixture.nativeElement;
    const expectd: string = fixture.componentInstance.title;
    expect(compiled.querySelector('.content h1').textContent).toContain(expectd);
  });
});
