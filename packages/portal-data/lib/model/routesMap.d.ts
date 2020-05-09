import { CmsDataProvider, IRootRouteMap } from '@portal-site/types';
export interface routesMapState {
    loading: boolean;
    root: IRootRouteMap;
    error: any;
}
declare const routeMaps: (dataProvider: CmsDataProvider) => {
    state: routesMapState;
    namespace: string;
    reducer: object;
    effect: Function;
};
export default routeMaps;
