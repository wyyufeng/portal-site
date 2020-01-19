import { IRootRouteMap } from "../router/RouteMap";
import { DataProvider } from "../types";
import { put, call, takeLatest } from "redux-saga/effects";
export interface routeMapsState {
  loading: Boolean;
  routes: IRootRouteMap;
  error: null | Error;
}
const routeMaps = (dataProvider: DataProvider) => ({
  namespace: "routesMap",
  state: {
    loading: true,
    routes: [],
    error: null
  },
  reducer: {
    getRoutes(state) {
      return state;
    },
    getRoutesSuccess(_, { payload }) {
      return {
        loading: false,
        routes: payload
      };
    },
    getRoutesFailure(_, { meta }) {
      return {
        loading: false,
        routes: [],
        error: meta.error
      };
    }
  },
  effect(actions: any) {
    function* worker(action) {
      console.log(action);
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
    return function*() {
      yield takeLatest(actions.getRoutes, worker);
    };
  }
});

export default routeMaps;
