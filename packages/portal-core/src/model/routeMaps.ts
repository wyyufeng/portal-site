import { IRootRouteMap } from "../router/RouteMap"

export interface routeMapsState {
    loading: Boolean
    routes: IRootRouteMap,
    error: null | Error
}
const routeMaps = () => ({
    namespace: "routeMaps",
    state: {
        loading: true,
        routes: [],
        error: null
    },
    reducer: {
        getRoutes(state) {
            return state
        },
        getRoutesSuccess(_, { payload }) {
            return {
                loading: false,
                routes: payload.routes
            }
        },
        getRoutesFailure(_, { meta }) {
            return {
                loading: false,
                routes: [],
                error: meta.error
            }
        }
    },
    effects() {

    }

})

export default routeMaps