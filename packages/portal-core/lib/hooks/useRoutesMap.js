import { useSelector } from "react-redux";
var useRoutesMap = function () {
    var routesMap = useSelector(function (state) { return state.routesMap.root; });
    return routesMap;
};
export default useRoutesMap;
