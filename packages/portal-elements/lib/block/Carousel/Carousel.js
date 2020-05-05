var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useRef, useCallback, useEffect } from 'react';
import { useQueryList } from 'portal-core';
import Picture from '../../elements/Picture';
import CarouselLib from './lib';
var ins = null;
var timer = null;
export var Carousel = function (_a) {
    var _b = _a.delay, delay = _b === void 0 ? 200 : _b, _c = _a.duration, duration = _c === void 0 ? 6000 : _c, resource = _a.resource;
    var wrapperRef = useRef(null);
    var navRef = useRef(null);
    var onSuccess = useCallback(function () {
        timer = setTimeout(function () {
            ins = new CarouselLib({
                container: wrapperRef.current,
                duration: duration,
                nav: navRef.current
            }).init();
        }, delay);
    }, [delay, duration]);
    useEffect(function () {
        return function () {
            ins && ins.destroy();
            clearTimeout(timer);
        };
    }, []);
    var records = useQueryList(resource, 1, 10, onSuccess).records;
    var items = records.map(function (item, i) { return (jsx(Picture, { key: item.imgSrc, className: "portal-carousel-slide", source: item.imgSrc, css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                z-index: 0;\n            "], ["\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                z-index: 0;\n            "]))) })); });
    return (jsx("div", { className: "portal-carousel", css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                width: 100%;\n                height: 100vh;\n                position: relative;\n                top: 0;\n                left: 0;\n                overflow: hidden;\n            "], ["\n                width: 100%;\n                height: 100vh;\n                position: relative;\n                top: 0;\n                left: 0;\n                overflow: hidden;\n            "]))) },
        jsx("div", { className: "portal-carousel-container", css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "], ["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "]))) },
            jsx("div", { ref: wrapperRef, className: "portal-carousel-wrappr" }, items),
            jsx("div", { ref: navRef, className: "portal-carousel-nav", css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        position: absolute;\n                        bottom: 5%;\n                        width: 100%;\n                        left: 0;\n                        text-align: center;\n                        & > .portal-carousel-nav-item.active {\n                            background-color: red;\n                        }\n                    "], ["\n                        position: absolute;\n                        bottom: 5%;\n                        width: 100%;\n                        left: 0;\n                        text-align: center;\n                        & > .portal-carousel-nav-item.active {\n                            background-color: red;\n                        }\n                    "]))) }, records.map(function (i) { return (jsx("i", { className: "portal-carousel-nav-item", css: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                                display: inline-block;\n                                width: 27px;\n                                height: 24px;\n                                margin: 0 5px;\n                                line-height: 3px;\n                                text-align: center;\n                                vertical-align: middle;\n                                cursor: pointer;\n                                background-color: #fff;\n                                border-radius: 50%;\n                            "], ["\n                                display: inline-block;\n                                width: 27px;\n                                height: 24px;\n                                margin: 0 5px;\n                                line-height: 3px;\n                                text-align: center;\n                                vertical-align: middle;\n                                cursor: pointer;\n                                background-color: #fff;\n                                border-radius: 50%;\n                            "]))), key: i.imgSrc })); })))));
};
Carousel.defaultProps = {
    delay: 200,
    duration: 6000,
    resource: 'slide'
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
