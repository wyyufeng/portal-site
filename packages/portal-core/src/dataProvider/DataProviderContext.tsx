import { createContext } from "react";

import { DataProvider } from "../types";
import defaultDataProvider from "./defaultDataProvider";
const DataProviderContext = createContext<DataProvider>(defaultDataProvider);

DataProviderContext.displayName = "DataProviderContext";

export default DataProviderContext;
