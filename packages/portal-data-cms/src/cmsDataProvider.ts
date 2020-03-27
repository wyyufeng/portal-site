import mapDataToRoute from "./mapDataToRoute";
import { RootRouteMap } from "portal-core";
import { listMapper, listOneMapper } from "./mapper";
import { CmsDataProvider, httpClient } from "./types";
export * from "./httpClient";

export default (
  httpClient: httpClient,
  gateway: string = "sw"
): CmsDataProvider => {
  return {
    queryRoutes(resource: string | undefined): Promise<any> {
      const endPoint = `/${gateway}-cms/api/queryAllChannel/${resource}`;

      return new Promise((resolve, reject) => {
        httpClient
          .get(endPoint)
          .then((res: any) => {
            const root = new RootRouteMap();
            const routeMaps = res.data.data.records.map((r: any) => {
              return mapDataToRoute(r, root);
            });
            root.children = routeMaps;
            resolve(root);
          })
          .catch((err: Error) => reject(err));
      });
    },
    queryList({ resource, page, size }) {
      const endPoint = `/${gateway}-cms/api/queryArchivesList`;
      return new Promise((resolve, reject) => {
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
          .then((res: any) => {
            resolve({
              records: listMapper(res.data.data.records),
              pages: res.data.data.pages,
              page: res.data.data.current,
              total: res.data.data.total,
              $$rawData: res.data.data
            });
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    queryOneById(resource, path = "queryArchivesById") {
      return new Promise((resolve, reject) => {
        return httpClient
          .get(`/${gateway}-cms/api/${path}/${resource}`)
          .then((res: any) => {
            resolve({
              data: listOneMapper(res.data.data),
              // $$rawData: res.data.data
            });
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    likeIt(resource) {
      return new Promise((resolve, reject) => {
        return httpClient.get(`/${gateway}-cms/api/doStarByArcId/${resource}`)
          .then((res: any) => {
            resolve({
              code: res.data.code
            })
          })
          .catch(err => {
            reject(err);
          });
      })
    },
    unLikeIt(resource) {
      return new Promise((resolve, reject) => {
        return httpClient.get(`/${gateway}-cms/api/cancelStarByActId/${resource}`)
          .then((res: any) => {
            resolve({
              code: res.data.code
            })
          })
          .catch(err => {
            reject(err);
          });
      })
    }
  };
};
