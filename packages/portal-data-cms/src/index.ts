import mapDataToRoute from './mapDataToRoute';
import { RouteMap } from 'portal-core';
export * from './httpClient';


export interface CmsDataProvider {
    queryRoutes:(resource:string)=>Promise<Array<RouteMap>>
}


export default (httpClient, gateway: string = 'sw'): CmsDataProvider => {
    return {
        queryRoutes(resource: string): Promise<any> {
            const endPoint = `/${gateway}-cms/api/queryAllChannel/${resource}`;

            return new Promise((resolve, reject) => {
                httpClient
                    .get(endPoint)
                    .then(res => {
                        const routeMaps = res.data.data.records.map(r => {
                            return mapDataToRoute(r, null);
                        });
                        resolve(routeMaps);
                    })
                    .catch(err => reject(err));
            });
        },
    };
};
