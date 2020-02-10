"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var portal_core_1 = require("portal-core");
var Nav = function (_a) {
    var _b = _a.exclude, exclude = _b === void 0 ? [] : _b;
    var routes = portal_core_1.useRoutesMap();
    return react_1.default.createElement("nav", { className: "mainmenu" },
        react_1.default.createElement("ul", null, routes.children.filter(function (item) { return !exclude.includes(item.route); }).map(function (route) {
            return react_1.default.createElement("li", { key: route.name },
                react_1.default.createElement(portal_core_1.NavLink, { to: route.path }, route.name),
                react_1.default.createElement("nav", { className: "secondmenu" },
                    react_1.default.createElement("ul", null, route.children.filter(function (item) { return !exclude.includes(item.route); }).map(function (child) {
                        return react_1.default.createElement("li", { key: child.name },
                            react_1.default.createElement(portal_core_1.NavLink, { to: child.path }, child.name));
                    }))));
        })));
};
exports.default = Nav;
