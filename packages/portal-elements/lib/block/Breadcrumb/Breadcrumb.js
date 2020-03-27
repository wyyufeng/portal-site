/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link, useRoutesMap, useLocation } from 'portal-core';
var Breadcrumb = function (_a) {
    var routes = _a.routes, _b = _a.home, home = _b === void 0 ? '/' : _b;
    var routesMap = useRoutesMap();
    var location = useLocation();
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
        return (jsx(Link, { to: route.path },
            jsx("span", { key: route.name }, route.name)));
    });
    return jsx("div", { className: "portal-breadcrumb" }, items);
};
export default Breadcrumb;
