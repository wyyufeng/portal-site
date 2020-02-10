import { RootRouteMap, IRootRouteMap } from "../router/RouteMap";
import { DataProvider } from "../types";
export interface routeMapsState {
    loading: Boolean;
    root: IRootRouteMap;
    error: null | Error;
}
declare const routeMaps: (dataProvider: DataProvider) => {
    namespace: string;
    state: {
        loading: boolean;
        root: RootRouteMap;
        error: any;
    };
    reducer: {
        getRoutes(state: any): any;
        getRoutesSuccess(_: any, { payload }: {
            payload: any;
        }): {
            loading: boolean;
            root: any;
        };
        getRoutesFailure(state: any, { meta }: {
            meta: any;
        }): {
            loading: boolean;
            error: any;
            root: any;
        };
    };
    effect(actions: any): () => IterableIterator<import("@redux-saga/types").SimpleEffect<"FORK", import("redux-saga/effects").ForkEffectDescriptor>>;
};
export default routeMaps;
