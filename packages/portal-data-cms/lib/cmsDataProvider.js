import mapDataToRoute from "./mapDataToRoute";
import { RootRouteMap } from "portal-core";
import { listMapper, listOneMapper } from "./mapper";
export * from "./httpClient";
export default (function (httpClient, gateway) {
    if (gateway === void 0) { gateway = "sw"; }
    return {
        queryRoutes: function (resource) {
            var endPoint = "/" + gateway + "-cms/api/queryAllChannel/" + resource;
            return new Promise(function (resolve, reject) {
                httpClient
                    .get(endPoint)
                    .then(function (res) {
                    var root = new RootRouteMap();
                    var routeMaps = res.data.data.records.map(function (r) {
                        return mapDataToRoute(r, root);
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
                        records: listMapper(res.data.data.records),
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
        queryOneById: function (resource, path) {
            if (path === void 0) { path = "queryArchivesById"; }
            return new Promise(function (resolve, reject) {
                return httpClient
                    .get("/" + gateway + "-cms/api/" + path + "/" + resource)
                    .then(function (res) {
                    resolve({
                        data: listOneMapper(res.data.data),
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        },
        likeIt: function (resource) {
            return new Promise(function (resolve, reject) {
                return httpClient.get("/" + gateway + "-cms/api/doStarByArcId/" + resource)
                    .then(function (res) {
                    resolve({
                        code: res.data.code
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        },
        unLikeIt: function (resource) {
            return new Promise(function (resolve, reject) {
                return httpClient.get("/" + gateway + "-cms/api/cancelStarByActId/" + resource)
                    .then(function (res) {
                    resolve({
                        code: res.data.code
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        }
    };
});
