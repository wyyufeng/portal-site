import { RouteMap } from 'portal-core';
export default function mapDataToRoute(data, parent) {
    var route = new RouteMap();
    var children = data.subChannel
        ? data.subChannel.map(function (i) { return mapDataToRoute(i, route); })
        : [];
    route.children = children;
    route.name = data.channelName;
    route.route = data.channelNo;
    route.parent = parent;
    route.isHome = data.channelNo === 'Home';
    return route;
}
