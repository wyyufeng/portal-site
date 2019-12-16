"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapDataToRoute_1 = __importDefault(require("./mapDataToRoute"));
__export(require("./httpClient"));
exports.default = (function (httpClient, gateway) {
    if (gateway === void 0) { gateway = 'sw'; }
    return {
        queryRoutes: function (resource) {
            var endPoint = "/" + gateway + "-cms/api/queryAllChannel/" + resource;
            return new Promise(function (resolve, reject) {
                httpClient
                    .get(endPoint)
                    .then(function (res) {
                    var routeMaps = res.data.data.records.map(function (r) {
                        return mapDataToRoute_1.default(r, null);
                    });
                    resolve(routeMaps);
                })
                    .catch(function (err) { return reject(err); });
            });
        },
    };
});
