"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var useRoutesMap = function () {
    var routesMap = react_redux_1.useSelector(function (state) { return state.routesMap.root; });
    return routesMap;
};
exports.default = useRoutesMap;
