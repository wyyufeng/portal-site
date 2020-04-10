import { useContext } from "react";
import DataProviderContext from "../dataProvider/DataProviderContext";


const useDataProvider = (method: string) => {
  const dataProvider = useContext(DataProviderContext);
  return dataProvider[method];
};

export default useDataProvider;
