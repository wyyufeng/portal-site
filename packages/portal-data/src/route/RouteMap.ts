import { IRouteMap, IRoute, IRootRouteMap } from '@portal-site/types';
export class RouteMap implements IRouteMap {
  public parent: IRoute;
  public children: Array<IRoute>;
  public name: string;
  public route: string;
  public description: string | undefined;
  public url: string | undefined;
  public id: string;
  public isVisible: boolean;
  public imgSrc: string | undefined;
  public isHome: boolean;
  get path(): string {
    return toPath(this);
  }
  constructor() {
    this.parent = {} as IRoute;
    this.route = '';
    this.children = [];
    this.name = '';
    this.url = '';
    this.isHome = false;
    this.isVisible = true;
    this.id = '';
    this.imgSrc = '';
    this.description = '';
  }
}

function toPath(route: IRoute): string {
  if (route.parent) {
    return toPath(route.parent) + '/' + route.route;
  }
  return route.route || '';
}

const _flatResultCache: IRoute[] = [];
const _flatToObjectResult: { [key: string]: IRoute } = {};
const _flatToChannelIdObjectResult: { [key: string]: IRoute } = {};

function _flatRoutes(root: any) {
  const children = root.children;
  if (children.length > 0) {
    !root.isRoot && _flatResultCache.push(root);
    children.map((i: any) => _flatRoutes(i));
  }
  !root.isRoot && _flatResultCache.push(root);
}
function _flatToObject(root: any) {
  const children = root.children;
  if (children.length > 0) {
    !root.isRoot && (_flatToObjectResult[root.route] = root);
    children.map((i: any) => _flatToObject(i));
  }
  !root.isRoot && (_flatToObjectResult[root.route] = root);
}
function _flatToChannelIdObject(root: any) {
  const children = root.children;
  if (children.length > 0) {
    !root.isRoot && (_flatToChannelIdObjectResult[root.id] = root);
    children.map((i: any) => _flatToChannelIdObject(i));
  }
  !root.isRoot && (_flatToChannelIdObjectResult[root.id] = root);
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
  flatToObject(): { [key: string]: IRoute } {
    if (Object.keys(_flatToObjectResult).length > 0) return _flatToObjectResult;
    _flatToObject(this);
    return _flatToObjectResult;
  }
  flatToChannelIdObject(): { [key: string]: IRoute } {
    if (Object.keys(_flatToChannelIdObjectResult).length > 0) return _flatToChannelIdObjectResult;
    _flatToChannelIdObject(this);
    return _flatToChannelIdObjectResult;
  }
  findByPath(path: string): IRoute | undefined {
    return this.flat().find((route) => route.path === path);
  }
}
