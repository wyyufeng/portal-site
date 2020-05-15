var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from 'react';
import { css } from '@emotion/core';
import { skeleton_animation } from '../styles';
import cls from 'classnames';
import { emptyObj } from '../helper';
var Skeleton = /** @class */ (function (_super) {
    __extends(Skeleton, _super);
    function Skeleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skeleton.prototype.renderContent = function () {
        var renderSkeleton = this.props.renderSkeleton;
        if (typeof renderSkeleton === 'function') {
            return renderSkeleton();
        }
        return React.createElement(Paragraph, null);
    };
    Skeleton.prototype.renderChildren = function () {
        var _a = this.props, loading = _a.loading, children = _a.children, animation = _a.animation, className = _a.className, _b = _a.style, style = _b === void 0 ? emptyObj : _b;
        if (loading) {
            return (React.createElement("div", { className: cls('portal-skeleton', className, {
                    'portal-skeleton-animation': animation
                }), style: style, css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                        display: inline-block;\n                        width: 100%;\n                        &.portal-skeleton-animation {\n                            .portal-skeleton-element {\n                                ", "\n                            }\n                        }\n                    "], ["\n                        display: inline-block;\n                        width: 100%;\n                        &.portal-skeleton-animation {\n                            .portal-skeleton-element {\n                                ", "\n                            }\n                        }\n                    "])), skeleton_animation) }, this.renderContent()));
        }
        return children;
    };
    Skeleton.prototype.render = function () {
        return this.renderChildren();
    };
    Skeleton.defaultProps = {
        loading: true,
        animation: true
    };
    return Skeleton;
}(React.Component));
export default Skeleton;
export var Card = function () {
    return (React.createElement("div", { className: "portal-skeleton-card", css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                width: 268px;\n                height: 320px;\n                margin: 16px;\n                box-shadow: 0px 0px 5px 3px #f7f9fa;\n            "], ["\n                width: 268px;\n                height: 320px;\n                margin: 16px;\n                box-shadow: 0px 0px 5px 3px #f7f9fa;\n            "]))) },
        React.createElement(Avatar, { style: {
                width: '100%',
                height: 200
            }, shape: "rect" }),
        React.createElement("div", { style: {
                padding: 14
            } },
            React.createElement(Title, null),
            React.createElement(Line, null),
            React.createElement(Line, null))));
};
export var List = function () {
    return (React.createElement("div", { className: "portal-skeleton-list", css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                display: flex;\n                justify-content: space-around;\n                padding: 16px 24px;\n                border-bottom: 1px solid #f0f0f0;\n            "], ["\n                display: flex;\n                justify-content: space-around;\n                padding: 16px 24px;\n                border-bottom: 1px solid #f0f0f0;\n            "]))) },
        React.createElement(Avatar, { style: {
                width: 48,
                height: 48
            } }),
        React.createElement("div", { style: {
                width: 'calc(100% - 120px)'
            } },
            React.createElement(Title, null),
            React.createElement(Paragraph, { rows: 3 }))));
};
export var Paragraph = function (_a) {
    var _b = _a.rows, rows = _b === void 0 ? 4 : _b, _c = _a.width, width = _c === void 0 ? '70%' : _c, className = _a.className, _d = _a.style, style = _d === void 0 ? emptyObj : _d;
    return (React.createElement("div", { className: cls('portal-skeleton-paragraph', className) }, __spreadArrays(Array(rows)).map(function (_, index) { return (React.createElement(Line, { width: getWidth(index, rows, width), style: style, key: index })); })));
};
export var Avatar = function (_a) {
    var _b = _a.shape, shape = _b === void 0 ? 'circle' : _b, className = _a.className, _c = _a.style, style = _c === void 0 ? emptyObj : _c;
    return (React.createElement("span", { className: cls('portal-skeleton-avatar', 'portal-skeleton-element', className), style: style, css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                display: inline-block;\n                vertical-align: top;\n                background: #f2f2f2;\n                width: 32px;\n                height: 32px;\n                line-height: 32px;\n                ", "\n            "], ["\n                display: inline-block;\n                vertical-align: top;\n                background: #f2f2f2;\n                width: 32px;\n                height: 32px;\n                line-height: 32px;\n                ", "\n            "])), shape === 'circle' && 'border-radius:50%') }));
};
export var Title = function (_a) {
    var className = _a.className, _b = _a.style, style = _b === void 0 ? emptyObj : _b, _c = _a.width, width = _c === void 0 ? '35%' : _c;
    return (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    React.createElement("h3", { css: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                height: 20px;\n                margin-top: 16px;\n                background: #f2f2f2;\n                display: inline-block;\n                margin: 0;\n                padding: 0;\n            "], ["\n                height: 20px;\n                margin-top: 16px;\n                background: #f2f2f2;\n                display: inline-block;\n                margin: 0;\n                padding: 0;\n            "]))), className: cls('portal-skeleton-title', 'portal-skeleton-element', className), style: __assign({ width: width }, style) }));
};
export var Line = function (_a) {
    var _b = _a.width, width = _b === void 0 ? '100%' : _b, _c = _a.height, height = _c === void 0 ? '14px' : _c, className = _a.className, _d = _a.style, style = _d === void 0 ? emptyObj : _d;
    return (React.createElement("span", { style: __assign({ width: width, height: height }, style), css: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                background-color: #f2f2f2;\n                margin-top: 16px;\n                display: inline-block;\n            "], ["\n                background-color: #f2f2f2;\n                margin-top: 16px;\n                display: inline-block;\n            "]))), className: cls('portal-skeleton-line', 'portal-skeleton-element', className) }));
};
Skeleton.Paragraph = Paragraph;
Skeleton.Avatar = Avatar;
Skeleton.Title = Title;
Skeleton.Line = Line;
Skeleton.Card = Card;
Skeleton.List = List;
function getWidth(index, rows, width) {
    if (Array.isArray(width)) {
        return width[index];
    }
    if (rows - 2 === index) {
        return '85%';
    }
    if (rows - 1 === index) {
        return width;
    }
    return undefined;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
