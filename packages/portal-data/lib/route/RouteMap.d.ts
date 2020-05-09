import { IRouteMap, IRoute, IRootRouteMap } from '@portal-site/types';
export declare class RouteMap implements IRouteMap {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description: string | undefined;
    url: string | undefined;
    id: string;
    isHome: boolean;
    get path(): string;
    constructor();
}
export declare class RootRouteMap implements IRootRouteMap {
    isRoot: true;
    parent: null;
    children: IRoute[];
    constructor();
    flat(): Array<IRoute>;
    findByPath(path: string): IRoute | undefined;
}
