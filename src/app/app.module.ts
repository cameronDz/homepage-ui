import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';

import { ResourceCardsComponent } from './components/resource-cards/resource-cards.component';
import { RightArrowSvgComponent } from './components/resource-cards/right-arrow-svg/right-arrow-svg.component';

import { BulletsContainerComponent } from './components/bullets-container/bullets-container.component';
import { BulletPointComponent } from './components/bullets-container/bullet-point/bullet-point.component';

import { ApplicationOverviewComponent } from './components/application-overview/application-overview.component';
import { ApplicationOverviewContainerComponent } from './components/application-overview-container/application-overview-container.component';

import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { CloudFooterComponent } from './components/app-footer/cloud-footer/cloud-footer.component';
import { CopyrightFooterComponent } from './components/app-footer/copyright-footer/copyright-footer.component';
import { CollapsibleIconComponent } from './components/application-overview/application-header/collapsible-icon/collapsible-icon.component';
import { ApplicationHeaderComponent } from './components/application-overview/application-header/application-header.component';
import { LoadIndicatorComponent } from './components/load-indicator/load-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    ApplicationOverviewComponent,
    ApplicationOverviewContainerComponent,
    BulletPointComponent,
    BulletsContainerComponent,
    CloudFooterComponent,
    CopyrightFooterComponent,
    ResourceCardsComponent,
    RightArrowSvgComponent,
    ToolbarHeaderComponent,
    CollapsibleIconComponent,
    ApplicationHeaderComponent,
    LoadIndicatorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
