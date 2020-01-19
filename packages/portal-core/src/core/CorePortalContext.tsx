import React, { FunctionComponent, ReactNode } from "react";
import { History } from "history";
import { DataProvider } from "../types";
import DataProviderContext from "../dataProvider/DataProviderContext";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { coreStore, createModels } from "../store";
export interface CorePortalContextProps {
  history: History;
  dataProvider: DataProvider;
  children: ReactNode;
  models: any[];
}

const CorePortalContext: FunctionComponent<CorePortalContextProps> = ({
  dataProvider,
  children,
  models = [],
  history
}) => {
  coreStore.useModel(...createModels(models, dataProvider));
  coreStore.run();

  return (
    <Provider store={coreStore.store}>
      <DataProviderContext.Provider value={dataProvider}>
        <Router history={history}>{children}</Router>
      </DataProviderContext.Provider>
    </Provider>
  );
};
export default CorePortalContext;
