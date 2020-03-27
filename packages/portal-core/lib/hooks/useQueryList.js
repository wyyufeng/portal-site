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
import { useEffect, useState } from "react";
import useDataProvider from "./useDataProvider";
var useQueryList = function (resource, page, size, onSuccess, onFailure) {
    var dataProvider = useDataProvider("queryList");
    var _a = useState({
        records: [],
        total: 0,
        error: null,
        loading: true,
        loaded: false,
        pages: 0,
        page: 1
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        setState(function (prevState) {
            return __assign({}, prevState, { loading: true });
        });
        dataProvider({ resource: resource, page: page, size: size })
            .then(function (data) {
            onSuccess && onSuccess(data);
            setState(__assign({}, data, { loaded: true, error: null, loading: false }));
        })
            .catch(function (error) {
            onFailure && onFailure(error);
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
export default useQueryList;
