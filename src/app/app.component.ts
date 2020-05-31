import { Component } from '@angular/core';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string = 'Cam Dziurgot';
  public subtitle: string = 'Software Engineer and DevOps enthusiast. Interests include; America, suits, coffee, and dogs.';

  public resourceTitle: string = 'Resources';
  public resourceSubtitle: string = 'Here are some links to help you get started:';

  public nextStepsTitle: string = 'Next Steps';
  public nextStepsSubtitle: string = 'What do you want to do next with your app?';

  // terminal selection item
  public selection: string = '';

  public handleTerminalButtonClick(event: string): void {
    this.selection = event;
  }
}
