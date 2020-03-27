var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Nav from '../Nav/Nav';
import { Link } from 'portal-core';
import Center from '../../layout/Center';
var Header = function (_a) {
    var logo = _a.logo, _b = _a.title, title = _b === void 0 ? '官网' : _b, extra = _a.extra;
    var isSrc = typeof logo === 'string';
    return (jsx("header", { className: "portal-header", css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                background-color: rgba(0, 0, 0, 0.5);\n                height: 85px;\n                width: 100%;\n                position: absolute;\n                top: 0;\n                z-index: 10;\n            "], ["\n                background-color: rgba(0, 0, 0, 0.5);\n                height: 85px;\n                width: 100%;\n                position: absolute;\n                top: 0;\n                z-index: 10;\n            "]))) },
        jsx(Center, { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    width: 100%;\n                "], ["\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    width: 100%;\n                "]))) },
            jsx("div", { className: "portal-logo" },
                isSrc ? (jsx(Link, { css: {}, to: "/", title: "\u9996\u9875" },
                    jsx("img", { css: {
                            verticalAlign: 'middle',
                            height: 30
                        }, src: logo, alt: "logo" }))) : (logo),
                jsx("h1", { css: {
                        fontSize: 0
                    } }, title)),
            jsx(Nav, { exclude: ['Slide'] }),
            jsx("div", { className: "portal-header-extra" }, extra))));
};
export default Header;
var templateObject_1, templateObject_2;
