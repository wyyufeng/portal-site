import { RouteMap } from 'portal-core';

export default function mapDataToRoute(data: any, parent: any) {
    const route = new RouteMap();
    const children = data.subChannel
        ? data.subChannel.map((i: any) => mapDataToRoute(i, route))
        : [];
    route.children = children;
    route.name = data.channelName;
    route.route = data.channelNo;
    route.parent = parent;
    return route;
}
