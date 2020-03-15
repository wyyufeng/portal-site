"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var portal_core_1 = require("portal-core");
var Breadcrumb = function (_a) {
    var routes = _a.routes, _b = _a.home, home = _b === void 0 ? '/' : _b;
    var routesMap = portal_core_1.useRoutesMap();
    var location = portal_core_1.useLocation();
    var pathname = location.pathname;
    console.log(pathname);
    var _routeArr = pathname.split('/').filter(Boolean);
    var current = routesMap.findByPath(_routeArr[0]);
    console.log(current);
    // const _routes: Route[] = [
    //     {
    //         name: '首页',
    //         path: home
    //     },
    //     {
    //         name: current.children[0].name,
    //         path: current.children[0].path
    //     }
    // ];
    var items = routes.map(function (route) {
        return (core_1.jsx(portal_core_1.Link, { to: route.path },
            core_1.jsx("span", { key: route.name }, route.name)));
    });
    return core_1.jsx("div", { className: "portal-breadcrumb" }, items);
};
exports.default = Breadcrumb;
