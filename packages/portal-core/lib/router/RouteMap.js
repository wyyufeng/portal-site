"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouteMap = /** @class */ (function () {
    function RouteMap() {
    }
    Object.defineProperty(RouteMap.prototype, "path", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    return RouteMap;
}());
exports.RouteMap = RouteMap;
function toPath(route) {
    if (route.parent) {
        return route.route + toPath(route);
    }
    return route.route;
}
var RootRouteMap = /** @class */ (function () {
    function RootRouteMap() {
        this.isRoot = true;
        this.parent = null;
    }
    RootRouteMap.prototype.flat = function () {
    };
    RootRouteMap.prototype.find = function () {
    };
    return RootRouteMap;
}());
exports.RootRouteMap = RootRouteMap;
