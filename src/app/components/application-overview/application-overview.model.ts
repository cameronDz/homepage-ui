export class ApplicationOverviewModel {
  public deployedUrl: string;
  public overviewParagraphs: Array<string>;
  public technologyParagraphs: Array<string>;
  public title: string;

  constructor(title: string = '',
              overviewParagraphs: Array<string> = [],
              technologyParagraphs: Array<string> = [],
              deployedUrl: string = '') {
    this.deployedUrl = deployedUrl;
    this.overviewParagraphs = overviewParagraphs;
    this.technologyParagraphs = technologyParagraphs;
    this.title = title;
  }
}
