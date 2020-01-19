"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mpa_1 = __importDefault(require("@mpfe/mpa"));
function createModels(models, dataProvider) {
    return models.map(function (model) { return model(dataProvider); });
}
exports.createModels = createModels;
var coreStore = mpa_1.default();
exports.coreStore = coreStore;
