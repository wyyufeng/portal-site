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
import * as React from 'react';
///  <reference path="object-fit-images.d.ts"/>
import { useRef, useEffect, useContext, useMemo } from 'react';
import 'lazysizes';
import objectFitImages from 'object-fit-images';
import nopic from '../assets/default';
import { ConfigContext } from '../config-provider';
import cx from 'classnames';
export var Picture = function (_a) {
    var _b;
    var source = _a.source, _c = _a.fallback, fallback = _c === void 0 ? nopic : _c, base = _a.base, alt = _a.alt, className = _a.className, Wrapper = _a.wrapper, rest = __rest(_a, ["source", "fallback", "base", "alt", "className", "wrapper"]);
    var imgRef = useRef(null);
    var config = useContext(ConfigContext);
    var _base = base || config.assetsBase;
    var _fallback = fallback || config.pictureFallback;
    var srcs = useMemo(function () {
        var result = Array.isArray(source)
            ? source.filter(Boolean).map(function (i) { return encodeURI(_base + source); })
            : [source].filter(Boolean).map(function (i) { return encodeURI(_base + source); });
        // 考虑到占位图一般是本地图片
        result.push(_fallback);
        return result;
    }, [source, _base, _fallback]);
    useEffect(function () {
        var current = imgRef.current;
        current.src = srcs.shift();
        function onError() {
            var src = srcs.length && srcs.shift();
            src && (current.src = src);
            if (!srcs.length && !fallback) {
                current.style.display = 'none';
            }
        }
        function onLoad() {
            objectFitImages(current, { watchMQ: true });
        }
        if (current) {
            current.onload = onLoad;
            current.onerror = onError;
        }
        // 将图片src 设置为 "" ,可以取消正在加载的图片
        return function () { return (current.src = ''); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [srcs]);
    return (React.createElement(Wrapper, __assign({ className: cx('portal-picture', (_b = {},
            _b[className] = !!className,
            _b)) }, rest, { css: {
            textAlign: 'center',
            display: 'flex'
        } }),
        React.createElement("img", { css: {
                width: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
                margin: 0,
                padding: 0
            }, alt: alt, ref: imgRef })));
};
Picture.defaultProps = {
    base: '',
    alt: '图片',
    wrapper: 'div',
    className: ''
};
export default Picture;
