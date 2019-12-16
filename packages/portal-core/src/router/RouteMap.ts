export interface IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description?: string;
    url?: string;
    id: string;
    path: string
}

export class RouteMap implements IRoute {
    public parent: IRoute;
    public children: Array<IRoute>;
    public name: string;
    public route: string;
    public description: string | undefined;
    public url: string | undefined;
    public id: string;
    get path() {
        return ''
    }
}

export class RootRouteMap {
    route: "/"
    isRoot: true;
    parent: null
    name: "根路由"
    path: "/"
}
