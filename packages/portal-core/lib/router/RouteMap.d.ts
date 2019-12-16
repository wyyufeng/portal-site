export interface IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description?: string;
    url?: string;
    id: string;
}
export declare class RouteMap implements IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description: string | undefined;
    url: string | undefined;
    id: string;
}
