import { ApplicationName } from './application-overview.model';
import { BulletPointType } from './bullet-point.model';

export class DataOptions {

  constructor(
    public bulletPointSegment: BulletPointType = BulletPointType.N_A,
    public applicationName: ApplicationName = ApplicationName.N_A) {}

  public static clone(original: DataOptions): DataOptions {
    const copy: DataOptions = new DataOptions();
    if (!!original) {
      const { applicationName, bulletPointSegment } = original;
      copy.applicationName = applicationName;
      copy.bulletPointSegment = bulletPointSegment;
    }
    return copy;
  }
}
