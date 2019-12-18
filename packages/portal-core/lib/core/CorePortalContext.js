"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DataProviderContext_1 = __importDefault(require("../dataProvider/DataProviderContext"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("../store");
var history_1 = __importDefault(require("../router/history"));
var CorePortalContext = function (_a) {
    var dataProvider = _a.dataProvider, children = _a.children, _b = _a.routerType, routerType = _b === void 0 ? "browser" : _b, basename = _a.basename;
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.coreStore.store },
        react_1.default.createElement(DataProviderContext_1.default.Provider, { value: dataProvider },
            react_1.default.createElement(react_router_dom_1.Router, { history: history_1.default(routerType, basename) }, children))));
};
exports.default = CorePortalContext;
