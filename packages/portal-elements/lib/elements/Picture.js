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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
///  <reference path="object-fit-images.d.ts"/>
var react_1 = __importStar(require("react"));
var object_fit_images_1 = __importDefault(require("object-fit-images"));
var default_1 = __importDefault(require("../assets/default"));
var Picture = function (_a) {
    var src = _a.src, webpSupport = _a.webpSupport, _b = _a.webpFix, webpFix = _b === void 0 ? '_.webp' : _b, _c = _a.fallback, fallback = _c === void 0 ? default_1.default : _c, _d = _a.alt, alt = _d === void 0 ? '图片' : _d, rest = __rest(_a, ["src", "webpSupport", "webpFix", "fallback", "alt"]);
    var imgRef = react_1.useRef(null);
    var webpSrc = src || fallback;
    if (webpSupport && src) {
        webpSrc = src + webpFix;
    }
    var _e = react_1.useState(!Boolean(webpSrc)), fb = _e[0], setFb = _e[1];
    var _f = react_1.useState(webpSupport), webpExist = _f[0], setWebpExist = _f[1];
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
    return react_1.default.createElement("img", __assign({ alt: alt }, rest, { src: finalSrc, ref: imgRef }));
};
exports.default = Picture;
