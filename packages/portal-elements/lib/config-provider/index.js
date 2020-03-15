"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.ConfigContext = react_1.default.createContext({
    assetsBase: '',
    pictureFallback: ''
});
exports.ConfigConsumer = exports.ConfigContext.Consumer;
exports.ConfigProvider = exports.ConfigContext.Provider;
