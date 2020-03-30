
import { RootRouteMap, } from "../route/index";
import { CmsDataProvider, IRootRouteMap } from "portal-types";
import { put, call, takeLatest } from "redux-saga/effects";

export interface routesMapState {
  loading: boolean
  root: IRootRouteMap,
  error: any
}

const routeMaps = (dataProvider: CmsDataProvider) => ({
  namespace: "routesMap",
  state: {
    loading: true,
    root: new RootRouteMap(),
    error: null
  },
  reducer: {
    getRoutes(state) {
      return state;
    },
    getRoutesSuccess(_, { payload }) {
      return {
        loading: false,
        root: payload
      };
    },
    getRoutesFailure(state, { meta }) {
      return {
        loading: false,
        error: meta.error,
        root: state.root
      };
    }
  },
  effect(actions: any) {
    function* worker(action) {
      try {
        const records = yield call(
          [dataProvider, "queryRoutes"],
          action.payload
        );
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
