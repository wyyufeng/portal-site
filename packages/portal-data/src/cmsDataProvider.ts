import mapDataToRoute from './mapDataToRoute';
import { listMapper, listOneMapper } from './mapper';
import { CmsDataProvider } from '@portal-site/types';
import { AxiosInstance } from 'axios';

import { RootRouteMap } from './route/index';
export * from './httpClient';
export default (httpClient: AxiosInstance, gateway?: string): CmsDataProvider => {
  const slash = !!gateway ? "/" : "";
  return {
    queryRoutes(resource: string | undefined): Promise<any> {

      const endPoint = `${slash}${gateway}/api/queryAllChannel/${resource}`;

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
    queryList({ resource, page, size, params }: { resource: string; page: number; size: number, params: { [key: string]: any } }) {
      const endPoint = `${slash}${gateway}/api/queryArchivesList`;
      return new Promise((resolve, reject) => {
        httpClient
          .post(endPoint, {
            entity: {
              channelNo: resource
            },
            param: {
              pageSize: size,
              pageNum: page, ...params
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
    queryOneById({ resource, params }: { resource: string, params: { path: string, [key: string]: any } }) {
      return new Promise((resolve, reject) => {
        const { path, ...rest } = params;
        return httpClient
          .get(`${slash}${gateway}/api/${path ?? 'queryArchivesById'}/${resource}`, rest)
          .then((res: any) => {
            resolve({
              data: listOneMapper(res.data.data)
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
          .get(`${slash}${gateway}/api/doStarByArcId/${resource}`)
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
          .get(`${slash}${gateway}/api/cancelStarByActId/${resource}`)
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
