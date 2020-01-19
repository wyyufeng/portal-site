"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouteMap = /** @class */ (function () {
    function RouteMap() {
    }
    Object.defineProperty(RouteMap.prototype, "path", {
        get: function () {
            return toPath(this);
        },
        enumerable: true,
        configurable: true
    });
    return RouteMap;
}());
exports.RouteMap = RouteMap;
function toPath(route) {
    var _a;
    if (route.parent) {
        return toPath(route.parent) + "/" + route.route;
    }
    return _a = route.route, (_a !== null && _a !== void 0 ? _a : "");
}
var RootRouteMap = /** @class */ (function () {
    function RootRouteMap() {
        this.isRoot = true;
        this.parent = null;
    }
    RootRouteMap.prototype.flat = function () { };
    RootRouteMap.prototype.find = function () { };
    return RootRouteMap;
}());
exports.RootRouteMap = RootRouteMap;
