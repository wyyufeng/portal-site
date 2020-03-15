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
var React = __importStar(require("react"));
///  <reference path="object-fit-images.d.ts"/>
var react_1 = require("react");
require("lazysizes");
var object_fit_images_1 = __importDefault(require("object-fit-images"));
var default_1 = __importDefault(require("../assets/default"));
var config_provider_1 = require("../config-provider");
var classnames_1 = __importDefault(require("classnames"));
exports.Picture = function (_a) {
    var _b;
    var source = _a.source, _c = _a.fallback, fallback = _c === void 0 ? default_1.default : _c, _d = _a.alt, alt = _d === void 0 ? '图片' : _d, _e = _a.base, base = _e === void 0 ? '' : _e, className = _a.className, rest = __rest(_a, ["source", "fallback", "alt", "base", "className"]);
    var imgRef = react_1.useRef(null);
    var config = react_1.useContext(config_provider_1.ConfigContext);
    var _base = base || config.assetsBase;
    var _fallback = fallback || config.pictureFallback;
    // 手动指定的 src 属性将会失效
    delete rest.src;
    var srcs = react_1.useMemo(function () {
        var result = Array.isArray(source)
            ? source.filter(Boolean).map(function (i) { return encodeURI(_base + source); })
            : [source].filter(Boolean).map(function (i) { return encodeURI(_base + source); });
        // 考虑到占位图一般是本地图片
        result.push(_fallback);
        return result;
    }, [source, _base, _fallback]);
    react_1.useEffect(function () {
        var current = imgRef.current;
        current.src = srcs.shift();
        function onError() {
            srcs.length && (current.src = srcs.shift());
        }
        function onLoad() {
            object_fit_images_1.default(current, { watchMQ: true });
        }
        if (current) {
            current.onload = onLoad;
            current.onerror = onError;
        }
        // 将图片src 设置为 "" ,可以取消正在加载的图片
        return function () { return (current.src = ''); };
    }, [srcs]);
    return (React.createElement("div", __assign({ className: classnames_1.default('portal-picture', (_b = {},
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
exports.default = exports.Picture;
