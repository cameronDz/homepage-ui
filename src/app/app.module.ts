import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CloudFooterComponent } from './components/cloud-footer/cloud-footer.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { CircleCardLinkComponent } from './components/circle-card-link/circle-card-link.component';
import { LinkedFooterComponent } from './components/linked-footer/linked-footer.component';
import { ResourceCardsComponent } from './components/resource-cards/resource-cards.component';
import { TerminalCardsComponent } from './components/terminal-cards/terminal-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudFooterComponent,
    ToolbarHeaderComponent,
    CircleCardLinkComponent,
    LinkedFooterComponent,
    ResourceCardsComponent,
    TerminalCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
