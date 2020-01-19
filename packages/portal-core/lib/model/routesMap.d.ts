import { IRootRouteMap } from "../router/RouteMap";
import { DataProvider } from "../types";
export interface routeMapsState {
    loading: Boolean;
    routes: IRootRouteMap;
    error: null | Error;
}
declare const routeMaps: (dataProvider: DataProvider) => {
    namespace: string;
    state: {
        loading: boolean;
        routes: any[];
        error: any;
    };
    reducer: {
        getRoutes(state: any): any;
        getRoutesSuccess(_: any, { payload }: {
            payload: any;
        }): {
            loading: boolean;
            routes: any;
        };
        getRoutesFailure(_: any, { meta }: {
            meta: any;
        }): {
            loading: boolean;
            routes: any[];
            error: any;
        };
    };
    effect(actions: any): () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
};
export default routeMaps;
