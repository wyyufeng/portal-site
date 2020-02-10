import { useSelector } from "react-redux";
import { IRootRouteMap } from '../router/RouteMap'
const useRoutesMap = (): IRootRouteMap => {
  const routesMap = useSelector((state: any) => state.routesMap.root);
  return routesMap;
};

export default useRoutesMap;
