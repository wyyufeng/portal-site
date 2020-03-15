"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@emotion/core");
var portal_core_1 = require("portal-core");
var Nav = function (_a) {
    var _b = _a.exclude, exclude = _b === void 0 ? [] : _b;
    var routes = portal_core_1.useRoutesMap();
    return (React.createElement("nav", { className: "portal-nav", css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                height: 88px;\n                width: 800px;\n                ul {\n                    list-style: none;\n                    margin: 0;\n                    padding: 0;\n                }\n                a {\n                    text-decoration: none;\n                    color: #000;\n                }\n            "], ["\n                height: 88px;\n                width: 800px;\n                ul {\n                    list-style: none;\n                    margin: 0;\n                    padding: 0;\n                }\n                a {\n                    text-decoration: none;\n                    color: #000;\n                }\n            "]))) },
        React.createElement("ul", { className: "portal-nav-firstmenu", css: {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '100%'
            } }, routes.children
            .filter(function (item) { return !exclude.includes(item.route); })
            .map(function (route) {
            return (React.createElement("li", { css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                                    display: flex;\n                                    justify-content: center;\n                                    position: relative;\n                                    flex-wrap: wrap;\n                                    height: 80px;\n                                    align-items: center;\n                                    & > a {\n                                        width: 100%;\n                                        text-align: center;\n                                    }\n                                    &:hover {\n                                        nav {\n                                            display: flex;\n                                        }\n                                    }\n                                "], ["\n                                    display: flex;\n                                    justify-content: center;\n                                    position: relative;\n                                    flex-wrap: wrap;\n                                    height: 80px;\n                                    align-items: center;\n                                    & > a {\n                                        width: 100%;\n                                        text-align: center;\n                                    }\n                                    &:hover {\n                                        nav {\n                                            display: flex;\n                                        }\n                                    }\n                                "]))), className: "portal-nav-firstmenu-li", key: route.name },
                React.createElement(portal_core_1.NavLink, { to: route.path }, route.name),
                React.createElement("nav", { className: "portal-nav-second", css: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                                        display: none;\n                                        width: 200px;\n                                        position: absolute;\n                                        top: 80px;\n                                        justify-content: center;\n                                    "], ["\n                                        display: none;\n                                        width: 200px;\n                                        position: absolute;\n                                        top: 80px;\n                                        justify-content: center;\n                                    "]))) },
                    React.createElement("ul", { className: "portal-nav-secondmenu" }, route.children
                        .filter(function (item) { return !exclude.includes(item.route); })
                        .map(function (child) {
                        return (React.createElement("li", { key: child.name },
                            React.createElement(portal_core_1.NavLink, { to: child.path }, child.name)));
                    })))));
        }))));
};
exports.default = Nav;
var templateObject_1, templateObject_2, templateObject_3;
