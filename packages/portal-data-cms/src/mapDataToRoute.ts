import { RouteMap } from 'portal-core';

export default function mapDataToRoute(data, parent) {
    const route = new RouteMap();
    const children = data.subChannel
        ? data.subChannel.map(i => mapDataToRoute(i, route))
        : [];
    route.children = children;
    route.name = data.channelName;
    route.route = data.channelNo;
    route.parent = parent;
    return route;
}
