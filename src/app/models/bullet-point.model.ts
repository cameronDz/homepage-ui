

export class BulletPointModel {

  constructor(
    public message: string = '',
    public iconTitle: string = '',
    public iconSrc: string = '',
    public iconHref: string = '',
    public iconHrefTargetBlank: boolean = true) {}

  public static clone(original: BulletPointModel): BulletPointModel {
    const copy: BulletPointModel = new BulletPointModel();
    if (!!original) {
      const { iconHref, iconHrefTargetBlank, iconSrc, iconTitle, message } = original;
      copy.iconHref = iconHref;
      copy.iconHrefTargetBlank = iconHrefTargetBlank;
      copy.iconSrc = iconSrc;
      copy.iconTitle = iconTitle;
      copy.message = message;
    }
    return copy;
  }

  public static clones(originals: Array<BulletPointModel>): Array<BulletPointModel> {
    const copies: Array<BulletPointModel> = [];
    const length = originals?.length || 0;
    for (let idx = 0; idx < length; idx++) {
      copies.push(BulletPointModel.clone(originals[idx]));
    }
    return copies;
  }
}

export enum BulletPointType {
  'N_A' = 0,
  'OVERVIEW' = 1,
  'AUGMENTED_APP' = 2,
  'ARTICLE_NOTES_APP' = 3
}
