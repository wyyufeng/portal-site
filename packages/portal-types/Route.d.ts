export interface IRoute {
    parent: IRoute;
    children: IRoute[];
    name: string;
    route: string;
    description?: string;
    url?: string;
    id: string;
    path: string;
    isHome: boolean;
}

export interface IRouteMap {
    parent: IRoute;
    children: IRoute[];
    name: string;
    route: string;
    description: string | undefined;
    url: string | undefined;
    id: string;
    isHome: boolean;
    path: string;
}

export interface IRootRouteMap {
    isRoot: boolean;
    parent: null;
    children: IRoute[];
    flat(): IRoute[];
    findByPath(path: string): IRoute | undefined;
}