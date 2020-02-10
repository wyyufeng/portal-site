"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var portal_core_1 = require("portal-core");
var Header = function () {
    console.log(portal_core_1.useRoutesMap());
    return react_1.default.createElement("header", null);
};
exports.default = Header;
