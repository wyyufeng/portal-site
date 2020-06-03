import { IRouteMap, IRoute, IRootRouteMap } from '@portal-site/types';
export class RouteMap implements IRouteMap {
    public parent: IRoute;
    public children: Array<IRoute>;
    public name: string;
    public route: string;
    public description: string | undefined;
    public url: string | undefined;
    public id: string;
    public isHome: boolean;
    get path(): string {
        return toPath(this);
    }
    constructor() {
        this.parent = {} as IRoute;
        this.route = '';
        this.children = [];
        this.name = '';
        this.isHome = false;
        this.id = '';
    }
}

function toPath(route: IRoute): string {
    if (route.parent) {
        return toPath(route.parent) + '/' + route.route;
    }
    return route.route || '';
}

const _flatResultCache: IRoute[] = [];
function _flatRoutes(root: any) {
    const children = root.children;
    if (children.length > 0) {
        !root.isRoot && _flatResultCache.push(root);
        return children.map((i: any) => _flatRoutes(i));
    }
    !root.isRoot && _flatResultCache.push(root);
}

export class RootRouteMap implements IRootRouteMap {
    isRoot: true;
    parent: null;
    children: IRoute[];

    constructor() {
        this.isRoot = true;
        this.parent = null;
        this.children = [];
    }
    flat(): Array<IRoute> {
        if (_flatResultCache.length > 0) return _flatResultCache;
        _flatRoutes(this);
        return _flatResultCache;
    }
    findByPath(path: string): IRoute | undefined {
        return this.flat().find((route) => route.path === path);
    }
}
