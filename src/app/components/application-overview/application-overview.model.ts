export class ApplicationOverviewModel {
  public overviewParagraphs: Array<string>;
  public technologyParagraphs: Array<string>;
  public title: string;

  constructor(title: string = '', overviewParagraphs: Array<string> = [], technologyParagraphs: Array<string> = []) {
    this.overviewParagraphs = overviewParagraphs;
    this.technologyParagraphs = technologyParagraphs;
    this.title = title;
  }
}
