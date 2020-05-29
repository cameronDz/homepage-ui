import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalCardsComponent } from './terminal-cards.component';

describe('TerminalCardsComponent', () => {
  let component: TerminalCardsComponent;
  let fixture: ComponentFixture<TerminalCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
