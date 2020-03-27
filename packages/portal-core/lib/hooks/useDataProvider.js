import { useContext } from "react";
import DataProviderContext from "../dataProvider/DataProviderContext";
var useDataProvider = function (method) {
    var dataProvider = useContext(DataProviderContext);
    return method ? dataProvider[method] : dataProvider;
};
export default useDataProvider;
