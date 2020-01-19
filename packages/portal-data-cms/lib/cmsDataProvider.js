"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapDataToRoute_1 = __importDefault(require("./mapDataToRoute"));
var portal_core_1 = require("portal-core");
var mapper_1 = require("./mapper");
__export(require("./httpClient"));
exports.default = (function (httpClient, gateway) {
    if (gateway === void 0) { gateway = "sw"; }
    return {
        queryRoutes: function (resource) {
            var endPoint = "/" + gateway + "-cms/api/queryAllChannel/" + resource;
            return new Promise(function (resolve, reject) {
                httpClient
                    .get(endPoint)
                    .then(function (res) {
                    var root = new portal_core_1.RootRouteMap();
                    var routeMaps = res.data.data.records.map(function (r) {
                        return mapDataToRoute_1.default(r, root);
                    });
                    root.children = routeMaps;
                    resolve(root);
                })
                    .catch(function (err) { return reject(err); });
            });
        },
        queryList: function (_a) {
            var resource = _a.resource, page = _a.page, size = _a.size;
            var endPoint = "/" + gateway + "-cms/api/queryArchivesList";
            return new Promise(function (resolve, reject) {
                httpClient
                    .post(endPoint, {
                    entity: {
                        channelNo: resource
                    },
                    param: {
                        pageSize: size,
                        pageNum: page
                    }
                })
                    .then(function (res) {
                    resolve({
                        records: mapper_1.listMapper(res.data.data.records),
                        pages: res.data.data.pages,
                        page: res.data.data.current,
                        total: res.data.data.total,
                        $$rawData: res.data.data
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        },
        queryOneById: function (resource) {
            return new Promise(function (resolve, reject) {
                return httpClient
                    .get("/" + gateway + "-cms/api/queryArchivesById/" + resource)
                    .then(function (res) {
                    resolve({
                        data: mapper_1.listOneMapper(res.data.data),
                        $$rawData: res.data.data
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        }
    };
});
