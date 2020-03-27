import React, { FunctionComponent, ReactNode } from 'react';
import { DataProvider } from '../types';
import DataProviderContext from '../dataProvider/DataProviderContext';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { coreStore, createModels } from '../store';
export interface CorePortalContextProps {
    dataProvider: DataProvider;
    children: ReactNode;
    models: any[];
}

const CorePortalContext: FunctionComponent<CorePortalContextProps> = ({
    dataProvider,
    children,
    models = []
}) => {
    coreStore.useModel(...createModels(models, dataProvider));
    coreStore.run();
    return (
        <Provider store={coreStore.store}>
            <DataProviderContext.Provider value={dataProvider}>
                {children}
            </DataProviderContext.Provider>
        </Provider>
    );
};
export default CorePortalContext;
