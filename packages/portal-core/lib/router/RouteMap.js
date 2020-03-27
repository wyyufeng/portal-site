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
export { RouteMap };
function toPath(route) {
    if (route.parent) {
        return toPath(route.parent) + "/" + route.route;
    }
    return route.route || "";
}
var _flatResultCache = [];
function _flatRoutes(root) {
    var children = root.children;
    if (children.length > 0) {
        return children.map(function (i) { return _flatRoutes(i); });
    }
    !root.isRoot && _flatResultCache.push(root);
}
var RootRouteMap = /** @class */ (function () {
    function RootRouteMap() {
        this.isRoot = true;
        this.parent = null;
        this.children = [];
    }
    RootRouteMap.prototype.flat = function () {
        if (_flatResultCache.length > 0)
            return _flatResultCache;
        _flatRoutes(this);
        return _flatResultCache;
    };
    RootRouteMap.prototype.findByPath = function (path) {
        return this.flat().find(function (route) { return route.path === path; });
    };
    return RootRouteMap;
}());
export { RootRouteMap };
