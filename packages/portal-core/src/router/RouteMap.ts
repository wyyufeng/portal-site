export interface IRoute {
    parent: IRoute;
    children: Array<IRoute>;
    name: string;
    route: string;
    description?: string;
    url?: string;
    id: string;
}

export class RouteMap implements IRoute {
    public parent: IRoute;
    public children: Array<IRoute>;
    public name: string;
    public route: string;
    public description: string | null;
    public url: string | null;
    public id: string;
    // constructor(
    //     parent: IRoute,
    //     children: Array<IRoute>,
    //     name: string,
    //     route: string,
    //     description: string,
    //     url: string,
    //     id: string
    // ) {
    //     this.parent = parent;
    //     this.children = children;
    //     this.name = name;
    //     this.route = route;
    //     this.description = description;
    //     this.url = url;
    //     this.id = id;
    // }
}
