import React, { FunctionComponent, ReactNode } from 'react';
import DataProviderContext, { DataProvider } from '../dataProvider/DataProviderContext';
import { Provider } from 'react-redux';
import { coreStore, createModels } from '../store';
export interface CorePortalContextProps {
    dataProvider: DataProvider;
    children: ReactNode;
    models: any[];
    store?: any;
}

const CorePortalContext: FunctionComponent<CorePortalContextProps> = ({
    dataProvider,
    children,
    models = [],
    store
}) => {
    coreStore.useModel(...createModels(models, dataProvider));
    coreStore.run();
    console.log(dataProvider);
    return (
        <Provider store={store || coreStore.store}>
            <DataProviderContext.Provider value={dataProvider}>
                {children}
            </DataProviderContext.Provider>
        </Provider>
    );
};
export default CorePortalContext;
