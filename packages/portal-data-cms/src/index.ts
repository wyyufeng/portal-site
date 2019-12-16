import mapDataToRoute from './mapDataToRoute';
import { RouteMap } from 'portal-core';
export * from './httpClient';


export interface CmsDataProvider {
    queryRoutes: (resource: string) => Promise<Array<RouteMap>>
}


export default (httpClient: any, gateway: string = 'sw'): CmsDataProvider => {
    return {
        queryRoutes(resource: string): Promise<any> {
            const endPoint = `/${gateway}-cms/api/queryAllChannel/${resource}`;

            return new Promise((resolve, reject) => {
                httpClient
                    .get(endPoint)
                    .then((res: any) => {
                        const routeMaps = res.data.data.records.map((r: any) => {
                            return mapDataToRoute(r, null);
                        });
                        resolve(routeMaps);
                    })
                    .catch((err: Error) => reject(err));
            });
        },
    };
};
