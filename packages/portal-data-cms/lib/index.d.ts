import { RouteMap } from 'portal-core';
export * from './httpClient';
export interface CmsDataProvider {
    queryRoutes: (resource: string) => Promise<Array<RouteMap>>;
}
declare const _default: (httpClient: any, gateway?: string) => CmsDataProvider;
export default _default;
