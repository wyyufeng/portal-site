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
var react_1 = require("react");
var portal_core_1 = require("portal-core");
var Picture_1 = __importDefault(require("../../elements/Picture"));
var Carousel = function () {
    var records = portal_core_1.useQueryList('slide', 1, 10).records;
    react_1.useCallback(function () {
    }, []);
    var items = records.map(function (item, i) { return (core_1.jsx(Picture_1.default, { className: "portal-carousel-slide", base: "http://220.191.224.251:80/file/", src: item.imgSrc, css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "], ["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "]))) })); });
    return (core_1.jsx("div", { className: "portal-carousel", css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                width: 100%;\n                height: 100vh;\n                position: relative;\n                top: 0;\n                left: 0;\n                overflow: hidden;\n            "], ["\n                width: 100%;\n                height: 100vh;\n                position: relative;\n                top: 0;\n                left: 0;\n                overflow: hidden;\n            "]))) },
        core_1.jsx("div", { className: "portal-carousel-container", css: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "], ["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "]))) },
            core_1.jsx("div", { className: "portal-carousel-wrappr" }, items))));
};
exports.default = Carousel;
var templateObject_1, templateObject_2, templateObject_3;
