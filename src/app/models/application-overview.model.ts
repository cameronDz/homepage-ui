import { BulletPointModel } from "./bullet-point.model";

export class ApplicationOverviewModel {
  constructor(
    public title: string = '',
    public overviewParagraphs: Array<string> = [],
    public technologyParagraphs: Array<string> = [],
    public deployedUrl: string = '',
    public bullets: Array<BulletPointModel> = []) {}

  public static clone(original: ApplicationOverviewModel): ApplicationOverviewModel {
    const copy: ApplicationOverviewModel = new ApplicationOverviewModel();
    if (!!original) {
      const { bullets, deployedUrl, overviewParagraphs, technologyParagraphs, title } = original;
      copy.bullets = BulletPointModel.clones(bullets);
      copy.deployedUrl = deployedUrl;
      copy.overviewParagraphs = [...(!!overviewParagraphs?.length ? overviewParagraphs : [])];
      copy.technologyParagraphs = [...(!!technologyParagraphs?.length ? technologyParagraphs : [])];
      copy.title = title;
    }
    return copy;
  }

  public static clones(originals: Array<ApplicationOverviewModel>): Array<ApplicationOverviewModel> {
    const copies: Array<ApplicationOverviewModel> = [];
    const length = originals?.length || 0;
    for (let idx = 0; idx < length; idx++) {
      copies.push(ApplicationOverviewModel.clone(originals[idx]));
    }
    return copies;
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
