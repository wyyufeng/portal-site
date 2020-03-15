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
var lib_1 = __importDefault(require("./lib"));
var ins = null;
var Carousel = function (_a) {
    var _b = _a.delay, delay = _b === void 0 ? 200 : _b, _c = _a.duration, duration = _c === void 0 ? 6000 : _c;
    var wrapperRef = react_1.useRef(null);
    var navRef = react_1.useRef(null);
    var onSuccess = react_1.useCallback(function () {
        setTimeout(function () {
            ins = new lib_1.default({
                container: wrapperRef.current,
                duration: duration,
                nav: navRef.current
            }).init();
        }, delay);
    }, [delay, duration]);
    react_1.useEffect(function () {
        return function () {
            ins && ins.destroy();
        };
    }, []);
    var records = portal_core_1.useQueryList('slide', 1, 10, onSuccess).records;
    var items = records.map(function (item, i) { return (core_1.jsx(Picture_1.default, { key: item.imgSrc, className: "portal-carousel-slide", source: item.imgSrc, css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                z-index: 0;\n            "], ["\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                z-index: 0;\n            "]))) })); });
    return (core_1.jsx("div", { className: "portal-carousel", css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                width: 100%;\n                height: 100vh;\n                position: relative;\n                top: 0;\n                left: 0;\n                overflow: hidden;\n            "], ["\n                width: 100%;\n                height: 100vh;\n                position: relative;\n                top: 0;\n                left: 0;\n                overflow: hidden;\n            "]))) },
        core_1.jsx("div", { className: "portal-carousel-container", css: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "], ["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "]))) },
            core_1.jsx("div", { ref: wrapperRef, className: "portal-carousel-wrappr" }, items),
            core_1.jsx("div", { ref: navRef, className: "portal-carousel-nav", css: core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        position: absolute;\n                        bottom: 5%;\n                        width: 100%;\n                        left: 0;\n                        text-align: center;\n                        & > .portal-carousel-nav-item.active {\n                            background-color: red;\n                        }\n                    "], ["\n                        position: absolute;\n                        bottom: 5%;\n                        width: 100%;\n                        left: 0;\n                        text-align: center;\n                        & > .portal-carousel-nav-item.active {\n                            background-color: red;\n                        }\n                    "]))) }, records.map(function (i) { return (core_1.jsx("i", { className: "portal-carousel-nav-item", css: core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                                display: inline-block;\n                                width: 27px;\n                                height: 24px;\n                                margin: 0 5px;\n                                line-height: 3px;\n                                text-align: center;\n                                vertical-align: middle;\n                                cursor: pointer;\n                                background-color: #fff;\n                                border-radius: 50%;\n                            "], ["\n                                display: inline-block;\n                                width: 27px;\n                                height: 24px;\n                                margin: 0 5px;\n                                line-height: 3px;\n                                text-align: center;\n                                vertical-align: middle;\n                                cursor: pointer;\n                                background-color: #fff;\n                                border-radius: 50%;\n                            "]))), key: i.imgSrc })); })))));
};
exports.default = Carousel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
