

export class BulletPointModel {
  public iconHref: string;
  public iconHrefTargetBlank: boolean;
  public iconSrc: string;
  public iconTitle: string;
  public message: string;

  constructor(
    message: string,
    iconTitle: string = '',
    iconSrc: string = '',
    iconHref: string = '',
    iconHrefTargetBlank: boolean = true) {
      this.iconHref = iconHref;
      this.iconHrefTargetBlank = iconHrefTargetBlank;
      this.iconSrc = iconSrc;
      this.iconTitle = iconTitle;
      this.message = message;
  }
}
