import { useEffect, useState } from "react";
import useDataProvider from "./useDataProvider";
var useLikeIt = function (resource) {
    var dataProvider = useDataProvider("likeIt");
    var _a = useState({
        loading: true,
        error: null,
        success: false
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        setState({
            loading: true,
            error: null,
            success: false
        });
        dataProvider(resource)
            .then(function (_a) {
            var code = _a.code;
            setState({
                loading: false,
                error: null,
                success: code === 200
            });
        })
            .catch(function (err) {
            setState({
                loading: false,
                error: err,
                success: false
            });
        });
    }, [resource, dataProvider]);
    return state;
};
export default useLikeIt;
