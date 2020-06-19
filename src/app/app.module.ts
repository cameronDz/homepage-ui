import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CloudFooterComponent } from './components/cloud-footer/cloud-footer.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { CircleCardLinkComponent } from './components/circle-card-link/circle-card-link.component';
import { LinkedFooterComponent } from './components/linked-footer/linked-footer.component';
import { ResourceCardsComponent } from './components/resource-cards/resource-cards.component';
import { TerminalCardsComponent } from './components/terminal-cards/terminal-cards.component';
import { RightArrowSvgComponent } from './components/resource-cards/right-arrow-svg/right-arrow-svg.component';
import { BulletsContainerComponent } from './components/bullets-container/bullets-container.component';
import { BulletPointComponent } from './components/bullets-container/bullet-point/bullet-point.component';
import { ApplicationOverviewComponent } from './components/application-overview/application-overview.component';
import { ApplicationOverviewContainerComponent } from './components/application-overview-container/application-overview-container.component';
import { CopyrightFooterComponent } from './components/copyright-footer/copyright-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudFooterComponent,
    ToolbarHeaderComponent,
    CircleCardLinkComponent,
    LinkedFooterComponent,
    ResourceCardsComponent,
    TerminalCardsComponent,
    RightArrowSvgComponent,
    BulletsContainerComponent,
    BulletPointComponent,
    ApplicationOverviewComponent,
    ApplicationOverviewContainerComponent,
    CopyrightFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
