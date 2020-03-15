"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var store_1 = require("../store");
var react_router_dom_1 = require("react-router-dom");
var RouteContext = function (_a) {
    var children = _a.children, root = _a.root, history = _a.history;
    react_1.useEffect(function () {
        store_1.coreStore.store.dispatch(store_1.coreStore.actions('routesMap').getRoutes(root));
    }, [root]);
    return react_1.default.createElement(react_router_dom_1.Router, { history: history }, children);
};
exports.default = RouteContext;
