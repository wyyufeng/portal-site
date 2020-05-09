import { RootRouteMap } from '../route/index';
import { CmsDataProvider, IRootRouteMap } from '@portal-site/types';
import { put, call, takeLatest } from 'redux-saga/effects';

export interface routesMapState {
    loading: boolean;
    root: IRootRouteMap;
    error: any;
}

const routeMaps = (
    dataProvider: CmsDataProvider
): {
    state: routesMapState;
    namespace: string;
    reducer: object;
    effect: Function;
} => ({
    namespace: 'routesMap',
    state: {
        loading: true,
        root: new RootRouteMap(),
        error: null
    },
    reducer: {
        getRoutes(state: routesMapState) {
            return state;
        },
        getRoutesSuccess(_: routesMapState, { payload }: { payload: IRootRouteMap }) {
            return {
                loading: false,
                root: payload
            };
        },
        getRoutesFailure(state: routesMapState, { meta }: { meta: any }) {
            return {
                loading: false,
                error: meta.error,
                root: state.root
            };
        }
    },
    effect(actions: any) {
        function* worker(action: any) {
            try {
                const records = yield call([dataProvider, 'queryRoutes'], action.payload);
                yield put(actions.getRoutesSuccess(records));
            } catch (error) {
                yield put(actions.getRoutesFailure(null, null, error));
            }
        }
        return function* () {
            yield takeLatest(actions.getRoutes, worker);
        };
    }
});

export default routeMaps;
