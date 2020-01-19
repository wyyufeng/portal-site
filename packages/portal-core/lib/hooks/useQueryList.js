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
var useQueryList = function (resource, page, size) {
    var dataProvider = useDataProvider_1.default("queryList");
    var _a = react_1.useState({
        records: [],
        total: 0,
        error: null,
        loading: true,
        loaded: false,
        pages: 0,
        page: 1
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        setState(function (prevState) {
            return __assign(__assign({}, prevState), { loading: true });
        });
        dataProvider({ resource: resource, page: page, size: size })
            .then(function (data) {
            setState(__assign(__assign({}, data), { loaded: true, error: null, loading: false }));
        })
            .catch(function (error) {
            setState({
                error: error,
                loading: false,
                loaded: false,
                records: [],
                total: 0,
                pages: 0,
                page: 0
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resource, page]);
    return state;
};
exports.default = useQueryList;
