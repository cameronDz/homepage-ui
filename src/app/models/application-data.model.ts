import { ApplicationOverviewModel } from "./application-overview.model";
import { BulletPointModel } from "./bullet-point.model";

export class ApplicationDataModel {
  constructor(
    public deployedApplications: Array<ApplicationOverviewModel> = [],
    public overviewBullets: Array<BulletPointModel> = [],
    public subtile: string = '',
    public title: string = '') {}

  public static clone(original: ApplicationDataModel): ApplicationDataModel {
    const copy: ApplicationDataModel = new ApplicationDataModel();
    if (!!original) {
      const { deployedApplications, overviewBullets, subtile, title } = original;
      copy.deployedApplications = ApplicationOverviewModel.clones(deployedApplications);
      copy.overviewBullets = BulletPointModel.clones(overviewBullets);
      copy.subtile = subtile;
      copy.title = title;
    }
    return copy;
  }
}
