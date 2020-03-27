var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
var Center = function (_a) {
    var _b = _a.tag, tag = _b === void 0 ? 'div' : _b, _c = _a.width, width = _c === void 0 ? 1250 : _c, children = _a.children, rest = __rest(_a, ["tag", "width", "children"]);
    // const X = tag;
    return (jsx("div", __assign({ className: "portal-center", css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                margin: 0 auto;\n                width: ", "px;\n            "], ["\n                margin: 0 auto;\n                width: ", "px;\n            "])), width) }, rest), children));
};
export default Center;
var templateObject_1;
