"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useDataProvider_1 = __importDefault(require("./useDataProvider"));
var useQueryList = function () {
    var dataProvider = useDataProvider_1.default();
    console.log(dataProvider);
};
exports.default = useQueryList;
