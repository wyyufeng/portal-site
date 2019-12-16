"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var portal_core_1 = require("portal-core");
function mapDataToRoute(data, parent) {
    var route = new portal_core_1.RouteMap();
    var children = data.subChannel
        ? data.subChannel.map(function (i) { return mapDataToRoute(i, route); })
        : [];
    route.children = children;
    route.name = data.channelName;
    route.route = data.channelNo;
    route.parent = parent;
    return route;
}
exports.default = mapDataToRoute;
