import { useContext } from "react";
import DataProviderContext, { Method } from "../dataProvider/DataProviderContext";


const useDataProvider = (method: string): Method => {
  const dataProvider = useContext(DataProviderContext);
  return dataProvider[method];
};

export default useDataProvider;
