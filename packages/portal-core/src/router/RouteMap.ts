export interface IRoute {
  parent: IRoute;
  children: Array<IRoute>;
  name: string;
  route: string;
  description?: string;
  url?: string;
  id: string;
  path: string;
  isHome: boolean
}

export class RouteMap implements IRoute {
  public parent: IRoute;
  public children: Array<IRoute>;
  public name: string;
  public route: string;
  public description: string | undefined;
  public url: string | undefined;
  public id: string;
  public isHome: boolean
  get path() {
    return toPath(this);
  }
}

function toPath(route: IRoute): string {
  if (route.parent) {
    return toPath(route.parent) + "/" + route.route;
  }
  return route.route || "";
}

export interface IRootRouteMap {
  isRoot: Boolean;
  parent: null;
  children: Array<IRoute>;

}

export class RootRouteMap implements IRootRouteMap {
  isRoot: Boolean;
  parent: null;
  children: Array<IRoute>;
  constructor() {
    this.isRoot = true;
    this.parent = null;
    this.children = [];
  }
  public flat() { }
  public find() { }
}
