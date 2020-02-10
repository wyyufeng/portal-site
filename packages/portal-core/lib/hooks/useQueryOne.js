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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDataProvider_1 = __importDefault(require("./useDataProvider"));
var useQueryOne = function (resource, path) {
    var dataProvider = useDataProvider_1.default("queryOneById");
    var _a = react_1.useState({
        loading: true,
        loaded: false,
        data: {},
        error: null
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        setState({
            data: {},
            loaded: false,
            loading: true,
            error: null
        });
        dataProvider(resource, path)
            .then(function (data) {
            setState(__assign({}, data, { loaded: true, loading: false, error: null }));
        })
            .catch(function (err) {
            setState({
                data: {},
                loaded: false,
                loading: false,
                error: err
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resource]);
    return state;
};
exports.default = useQueryOne;
