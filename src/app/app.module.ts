import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CloudFooterComponent } from './components/cloud-footer/cloud-footer.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { CircleCardLinkComponent } from './components/circle-card-link/circle-card-link.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudFooterComponent,
    ToolbarHeaderComponent,
    CircleCardLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
