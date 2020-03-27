import { useContext } from "react";
import DataProviderContext from "../dataProvider/DataProviderContext";

export type Method = (any, ...args: any[]) => Promise<any>;
const useDataProvider = (method?: string): Method => {
  const dataProvider = useContext(DataProviderContext);
  return method ? dataProvider[method] : dataProvider;
};

export default useDataProvider;
