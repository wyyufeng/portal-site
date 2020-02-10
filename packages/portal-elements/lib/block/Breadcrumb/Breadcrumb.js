"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var portal_core_1 = require("portal-core");
var Breadcrumb = function () {
    var routes = portal_core_1.useRoutesMap();
    var location = portal_core_1.useLocation();
    var pathname = location.pathname;
    console.log(routes, pathname);
    return core_1.jsx("div", { className: "portal-breadcrumb" });
};
exports.default = Breadcrumb;
