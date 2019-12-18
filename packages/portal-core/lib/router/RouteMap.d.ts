export interface IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description?: string;
    url?: string;
    id: string;
    path: string;
}
export declare class RouteMap implements IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description: string | undefined;
    url: string | undefined;
    id: string;
    get path(): string;
}
export declare class RootRouteMap {
    isRoot: Boolean;
    parent: null;
    children: Array<IRoute>;
    constructor();
    flat(): void;
    find(): void;
}
