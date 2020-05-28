import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CloudFooterComponent } from './components/cloud-footer/cloud-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
