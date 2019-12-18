"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var DataProviderContext_1 = __importDefault(require("./DataProviderContext"));
var useDataProvider = function () {
    var dataProvider = react_1.useContext(DataProviderContext_1.default);
    return dataProvider;
};
exports.default = useDataProvider;
