"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var Nav_1 = __importDefault(require("../../elements/Nav"));
var portal_core_1 = require("portal-core");
var Center_1 = __importDefault(require("../../layout/Center"));
var Header = function (_a) {
    var logo = _a.logo, _b = _a.title, title = _b === void 0 ? '官网' : _b, extra = _a.extra;
    var isSrc = typeof logo === 'string';
    return (core_1.jsx("header", { className: "portal-header", css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                background-color: rgba(0, 0, 0, 0.5);\n                height: 85px;\n                width: 100%;\n                position: absolute;\n                top: 0;\n                z-index: 10;\n            "], ["\n                background-color: rgba(0, 0, 0, 0.5);\n                height: 85px;\n                width: 100%;\n                position: absolute;\n                top: 0;\n                z-index: 10;\n            "]))) },
        core_1.jsx(Center_1.default, { css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    width: 100%;\n                "], ["\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    width: 100%;\n                "]))) },
            core_1.jsx("div", { className: "portal-logo" },
                isSrc ? (core_1.jsx(portal_core_1.Link, { css: {}, to: "/", title: "\u9996\u9875" },
                    core_1.jsx("img", { css: {
                            verticalAlign: 'middle',
                            height: 30
                        }, src: logo, alt: "logo" }))) : (logo),
                core_1.jsx("h1", { css: {
                        fontSize: 0
                    } }, title)),
            core_1.jsx(Nav_1.default, { exclude: ['Slide'] }),
            core_1.jsx("div", { className: "portal-header-extra" }, extra))));
};
exports.default = Header;
var templateObject_1, templateObject_2;
