export interface IRoute {
  parent: IRoute;
  children: IRoute[];
  name: string;
  route: string;
  description?: string;
  url: string;
  id: string;
  path: string;
  isHome: boolean;
  isVisible: boolean;
  imgSrc?: string;
}

export interface IRouteMap {
  parent: IRoute;
  children: IRoute[];
  name: string;
  route: string;
  description: string | undefined;
  url: string;
  id: string;
  isHome: boolean;
  isVisible: boolean;
  path: string;
  imgSrc?: string;
}

export interface IRootRouteMap {
  isRoot: boolean;
  parent: null;
  children: IRoute[];
  flat(): IRoute[];
  findByPath(path: string): IRoute | undefined;
  flatToObject(): { [key: string]: IRoute };
}
