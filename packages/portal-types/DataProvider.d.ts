import { IRootRouteMap } from './Route';
export interface ListItem {
  id: string;
  channelNo: string;
  channelName: string;
  groupId: string;
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
  $raw_data: any;
}
export interface IHTTPClient {
  get: (arg0: any) => Promise<any>;
  post: (endPoint: string, data: any) => Promise<any>;
}

export interface queryListParams {
  resource: string;
  page: number;
  size: number;
  [prop: string]: any;
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
  queryRoutes: (resource: string) => Promise<IRootRouteMap>;
  queryList: (params: queryListParams) => Promise<queryListResult>;
  queryOneById: (params: { resource: string, path?: string }) => Promise<queryOneByIdResult>;
  likeIt: (resource: string) => Promise<{ code: number }>;
  unLikeIt: (resource: string) => Promise<{ code: number }>;
}
