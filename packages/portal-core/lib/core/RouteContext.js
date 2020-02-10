"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var store_1 = require("../store");
var RouteContext = function (_a) {
    var children = _a.children, root = _a.root;
    react_1.useEffect(function () {
        store_1.coreStore.store.dispatch(store_1.coreStore.actions('routesMap').getRoutes(root));
    }, [root]);
    return children;
};
exports.default = RouteContext;
