import mapDataToRoute from './mapDataToRoute';
import { listMapper, listOneMapper } from './mapper';
import { CmsDataProvider, IHTTPClient } from '@portal-site/types';
import { RootRouteMap } from './route/index';
export * from './httpClient';
export default (httpClient: IHTTPClient, gateway: string = 'sw-cms'): CmsDataProvider => {
  return {
    queryRoutes(resource: string | undefined): Promise<any> {
      const endPoint = `/${gateway}/api/queryAllChannel/${resource}`;

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
    queryList({ resource, page, size }: { resource: string; page: number; size: number }) {
      const endPoint = `/${gateway}/api/queryArchivesList`;
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
          .catch((err: any) => {
            reject(err);
          });
      });
    },
    queryOneById(resource: string, path = 'queryArchivesById') {
      return new Promise((resolve, reject) => {
        return httpClient
          .get(`/${gateway}/api/${path}/${resource}`)
          .then((res: any) => {
            resolve({
              data: listOneMapper(res.data.data)
              // $$rawData: res.data.data
            });
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    },
    likeIt(resource: string) {
      return new Promise((resolve, reject) => {
        return httpClient
          .get(`/${gateway}/api/doStarByArcId/${resource}`)
          .then((res: any) => {
            resolve({
              code: res.data.code
            });
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    },
    unLikeIt(resource: string) {
      return new Promise((resolve, reject) => {
        return httpClient
          .get(`/${gateway}/api/cancelStarByActId/${resource}`)
          .then((res: any) => {
            resolve({
              code: res.data.code
            });
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    }
  };
};
