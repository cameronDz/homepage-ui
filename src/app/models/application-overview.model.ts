export class ApplicationOverviewModel {
  constructor(
    public title: string = '',
    public overviewParagraphs: Array<string> = [],
    public technologyParagraphs: Array<string> = [],
    public deployedUrl: string = '') {}

  public static clone(original: ApplicationOverviewModel): ApplicationOverviewModel {
    const copy: ApplicationOverviewModel = new ApplicationOverviewModel();
    if (!!original) {
      const { deployedUrl, overviewParagraphs, technologyParagraphs, title } = original;
      copy.deployedUrl = deployedUrl;
      copy.overviewParagraphs = (!!overviewParagraphs && !!overviewParagraphs.length) ? [...overviewParagraphs] : [];
      copy.technologyParagraphs = (!!technologyParagraphs && !!technologyParagraphs.length) ? [...technologyParagraphs] : [];
      copy.title = title;
    }
    return copy;
  }
}

export enum ApplicationOverviewText {
  CLICK_TO_COLLAPSE_TEXT = 'Click to Show Less',
  CLICK_TO_EXPAND_TEXT = 'Click to Read More'
}

export enum ApplicationName {
  AUGMENTED = 'augmented',
  ARTICLE_NOTES = 'articleNotes',
  N_A = ''
}
