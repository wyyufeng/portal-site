export interface IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description?: string;
    url?: string;
    id: string;
    path: string;
    isHome: boolean;
}
export declare class RouteMap implements IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description: string | undefined;
    url: string | undefined;
    id: string;
    isHome: boolean;
    readonly path: string;
}
export interface IRootRouteMap {
    isRoot: Boolean;
    parent: null;
    children: Array<IRoute>;
    flat: () => Array<IRoute>;
    findByPath: (path: string) => IRoute | undefined;
}
export declare class RootRouteMap implements IRootRouteMap {
    isRoot: Boolean;
    parent: null;
    children: Array<IRoute>;
    constructor();
    flat(): Array<IRoute>;
    findByPath(path: string): IRoute | undefined;
}
