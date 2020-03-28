var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Meta } from './Meta';
import { css } from '@emotion/core';
export var Item = function (_a) {
    var children = _a.children, _b = _a.extra, extra = _b === void 0 ? null : _b, _c = _a.split, split = _c === void 0 ? true : _c;
    var extraNodes = [];
    if (extra) {
        if (!Array.isArray(extra)) {
            extra = [extra];
        }
        React.Children.forEach(extra, function (child, index) {
            extraNodes.push(React.cloneElement(child, {
                key: index
            }));
        });
    }
    return (React.createElement("li", { css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                display: flex;\n                width: 100%;\n                min-height: 0;\n                background: 0 0;\n                padding: 18px 0;\n                border-bottom: 1px solid #f0f0f0;\n                &:last-child {\n                    border-bottom: none;\n                }\n            "], ["\n                display: flex;\n                width: 100%;\n                min-height: 0;\n                background: 0 0;\n                padding: 18px 0;\n                border-bottom: 1px solid #f0f0f0;\n                &:last-child {\n                    border-bottom: none;\n                }\n            "]))), className: "portal-list-item" },
        children,
        extra && (React.createElement("div", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                        margin-left: 40px;\n                    "], ["\n                        margin-left: 40px;\n                    "]))), className: "portal-list-item-extra" }, extraNodes))));
};
Item.Meta = Meta;
var templateObject_1, templateObject_2;
