import { Component } from '@angular/core';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'md-landing-app';
  public selection: string = '';

  public handleTerminalButtonClick(event: string): void {
    this.selection = event;
  }
}
