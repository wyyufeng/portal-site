var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { ThumbsUp } from 'react-feather';
import { css } from '@emotion/core';
import cls from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { button_base } from '../../styles';
import { useDataProvider } from 'portal-core';
export var Like = function (_a) {
    var resource = _a.resource, cancellable = _a.cancellable, Icon = _a.icon;
    var likeFetch = useDataProvider('likeIt');
    var unLikeFetch = useDataProvider('unLikeIt');
    var btn = useRef(null);
    var _b = useState(false), _active = _b[0], setactive = _b[1];
    useEffect(function () {
        var dom = btn.current;
        var clickHandle = function () {
            if (dom.classList.contains('portal-like-active')) {
                if (cancellable) {
                    unLikeFetch(resource).finally(function () {
                        setactive(false);
                    });
                }
                return;
            }
            setactive(true);
            likeFetch(resource).finally(function () {
                setactive(true);
            });
        };
        dom.addEventListener('click', clickHandle);
        return function () {
            dom.removeEventListener('click', clickHandle);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resource, likeFetch, unLikeFetch]);
    return (React.createElement("button", { ref: btn, className: cls('portal-like', { 'portal-like-active': _active }), css: [
            button_base,
            _active && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                        color: #ef5353;\n                    "], ["\n                        color: #ef5353;\n                    "])))
        ], type: "button" }, Icon));
};
Like.defaultProps = {
    icon: React.createElement(ThumbsUp, null),
    cancellable: false
};
var templateObject_1;
