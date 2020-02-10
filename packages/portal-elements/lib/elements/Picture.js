"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
///  <reference path="object-fit-images.d.ts"/>
var react_1 = require("react");
var object_fit_images_1 = __importDefault(require("object-fit-images"));
var default_1 = __importDefault(require("../assets/default"));
var classnames_1 = __importDefault(require("classnames"));
var Picture = function (_a) {
    var _b;
    var src = _a.src, webpSupport = _a.webpSupport, _c = _a.webpFix, webpFix = _c === void 0 ? '_.webp' : _c, _d = _a.fallback, fallback = _d === void 0 ? default_1.default : _d, _e = _a.alt, alt = _e === void 0 ? '图片' : _e, _f = _a.base, base = _f === void 0 ? '' : _f, className = _a.className, rest = __rest(_a, ["src", "webpSupport", "webpFix", "fallback", "alt", "base", "className"]);
    var imgRef = react_1.useRef(null);
    var webpSrc = src || fallback;
    if (webpSupport && src) {
        webpSrc = src + webpFix;
    }
    var _g = react_1.useState(!Boolean(webpSrc)), fb = _g[0], setFb = _g[1];
    var _h = react_1.useState(webpSupport), webpExist = _h[0], setWebpExist = _h[1];
    var memoref = react_1.useRef(webpExist);
    var finalSrc = webpExist ? webpSrc : fb ? fallback : src;
    react_1.useEffect(function () {
        function onError() {
            if (memoref.current) {
                memoref.current = false;
                return setWebpExist(false);
            }
            setFb(true);
        }
        function onLoad() {
            object_fit_images_1.default(imgRef.current, { watchMQ: true });
        }
        if (imgRef.current && webpSrc) {
            imgRef.current.onload = onLoad;
            imgRef.current.onerror = onError;
        }
    }, [webpSrc]);
    return core_1.jsx("div", __assign({ className: classnames_1.default("portal-picture", (_b = {},
            _b[className] = !!className,
            _b)) }, rest, { css: {
            width: 260,
            height: 160,
            textAlign: "center",
            display: "flex"
        } }),
        core_1.jsx("img", { css: {
                width: "100%",
                maxHeight: '100%',
                objectFit: "cover"
            }, alt: alt, src: base + finalSrc, ref: imgRef }));
};
exports.default = Picture;
