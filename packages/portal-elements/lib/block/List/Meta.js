var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { css } from '@emotion/core';
export var Meta = function (_a) {
    var avatar = _a.avatar, title = _a.title, description = _a.description, children = _a.children, secondary = _a.secondary, _b = _a.center, center = _b === void 0 ? false : _b, actions = _a.actions;
    return (React.createElement("div", { className: "portal-list-item-meta", css: [
            {
                display: 'flex',
                flex: 1
            },
            center && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                        align-items: center;\n                    "], ["\n                        align-items: center;\n                    "])))
        ] },
        React.createElement("div", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    position: relative;\n                    flex: 0 0 auto;\n                    float: none;\n                    margin: 0;\n                    padding: 0;\n                "], ["\n                    position: relative;\n                    flex: 0 0 auto;\n                    float: none;\n                    margin: 0;\n                    padding: 0;\n                "]))), className: "portal-list-item-meta-avatar" }, avatar),
        React.createElement("div", { className: "portal-list-item-meta-main", css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    flex: 1 1 auto;\n                    background: 0 0;\n                    margin: 0;\n                    padding: 0;\n                    box-shadow: none;\n                    font-size: 1em;\n                    border: none;\n                    min-width: 0;\n                    width: auto;\n                    align-self: top;\n                    padding-left: 1.5em;\n                "], ["\n                    flex: 1 1 auto;\n                    background: 0 0;\n                    margin: 0;\n                    padding: 0;\n                    box-shadow: none;\n                    font-size: 1em;\n                    border: none;\n                    min-width: 0;\n                    width: auto;\n                    align-self: top;\n                    padding-left: 1.5em;\n                "]))) },
            React.createElement("div", { css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        display: inline-block;\n                        margin: 6px 0 10px;\n                    "], ["\n                        display: inline-block;\n                        margin: 6px 0 10px;\n                    "]))), className: "portal-list-item-meta-header" },
                React.createElement("h4", { css: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                            font-size: 18px;\n                            color: #595757;\n                            font-weight: normal;\n                            margin: -4px 0 0 1px;\n                        "], ["\n                            font-size: 18px;\n                            color: #595757;\n                            font-weight: normal;\n                            margin: -4px 0 0 1px;\n                        "]))) }, title),
                React.createElement("span", { css: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                            margin: 7px 0 7px;\n                            font-size: 14px;\n                            line-height: 1em;\n                            color: rgba(0, 0, 0, 0.6);\n                        "], ["\n                            margin: 7px 0 7px;\n                            font-size: 14px;\n                            line-height: 1em;\n                            color: rgba(0, 0, 0, 0.6);\n                        "]))) }, secondary)),
            React.createElement("div", { className: "portal-list-item-meta-description", css: {
                    lineHeight: '1.8',
                    textAlign: 'justify',
                    fontSize: '14px',
                    color: '#898989'
                } }, description),
            actions && (React.createElement("div", { css: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                            display: flex;\n\n                            position: relative;\n                            background: 0 0;\n                            margin: 1rem 0 0;\n                            width: 100%;\n                            padding: 0 0 0;\n                            top: 0;\n                            left: 0;\n                            box-shadow: none;\n                            border-top: none;\n                            justify-content: flex-end;\n                        "], ["\n                            display: flex;\n\n                            position: relative;\n                            background: 0 0;\n                            margin: 1rem 0 0;\n                            width: 100%;\n                            padding: 0 0 0;\n                            top: 0;\n                            left: 0;\n                            box-shadow: none;\n                            border-top: none;\n                            justify-content: flex-end;\n                        "]))), className: "portal-list-item-meta-action" }, actions)))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
