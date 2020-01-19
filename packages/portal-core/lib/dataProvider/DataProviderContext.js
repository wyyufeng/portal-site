"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var defaultDataProvider_1 = __importDefault(require("./defaultDataProvider"));
var DataProviderContext = react_1.createContext(defaultDataProvider_1.default);
DataProviderContext.displayName = "DataProviderContext";
exports.default = DataProviderContext;
