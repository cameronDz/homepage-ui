export declare type onCompleteCallback = (self: any) => void;
export declare type onErrorCallback = (self: any, error: any) => void;
export declare type onSuccessCallback = (self: any, data: any) => void;

type BulletPoint = {
    iconHref: string;
    iconHrefTargetBlank: boolean;
    iconSrc: string;
    iconTitle: string;
    message: string;
}
type DeployedApplication = {
    bullets: BulletPoint[];
    deployedUrl: string;
    overviewParagraphs: string[];
    technologyParagraphs: string[];
    title: string;
};
export type DataResponse = {
    deployedApplications: DeployedApplication[];
    overviewBullets: BulletPoint[];
    subtitle: string;
    title: string;
}
