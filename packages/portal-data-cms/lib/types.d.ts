import { RouteMap } from "portal-core";
export interface ListItem {
    id: string;
    channelNo: string;
    channelName: string;
    title: string;
    subTitle: string;
    publishDate: string;
    parentChannelNo: string;
    imgSrc: string;
    appImgSrc: string;
    abstract: string;
    content: string;
    $content?: string;
    source: string;
    linkUrl: string;
    isShowTitle: boolean;
    visitCount: number;
    $$rawData: any;
}
export interface httpClient {
    get: (any: any) => Promise<any>;
    post: (endPoint: string, data: any) => Promise<any>;
}
export interface queryListParams {
    resource: string;
    page: number;
    size: number;
}
export interface queryListResult {
    records: Array<ListItem>;
    pages: number;
    page: number;
    total: number;
    $$rawData: any;
}
export interface queryOneByIdResult {
    data: ListItem | {};
}
export interface CmsDataProvider {
    queryRoutes: (resource: string) => Promise<Array<RouteMap>>;
    queryList: (params: queryListParams) => Promise<queryListResult>;
    queryOneById: (resource: string, path?: string) => Promise<queryOneByIdResult>;
    likeIt: (resource: string) => Promise<{
        code: number;
    }>;
    unLikeIt: (resource: string) => Promise<{
        code: number;
    }>;
}
