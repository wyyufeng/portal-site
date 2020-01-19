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
var CorePortalContext = function (_a) {
    var dataProvider = _a.dataProvider, children = _a.children, _b = _a.models, models = _b === void 0 ? [] : _b, history = _a.history;
    store_1.coreStore.useModel.apply(store_1.coreStore, store_1.createModels(models, dataProvider));
    store_1.coreStore.run();
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.coreStore.store },
        react_1.default.createElement(DataProviderContext_1.default.Provider, { value: dataProvider },
            react_1.default.createElement(react_router_dom_1.Router, { history: history }, children))));
};
exports.default = CorePortalContext;
