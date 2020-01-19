import { useSelector } from "react-redux";

const useRoutesMap = () => {
  const routesMap = useSelector((state: any) => state.routesMap);
  return routesMap;
};

export default useRoutesMap;
