import React, {
    FunctionComponent,
    ReactNode,
} from 'react';
import { History } from 'history';
import { DataProvider } from '../types';
import DataProviderContext from '../dataProvider/DataProviderContext';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { coreStore } from '../store';
import createHistory from '../router/history';
export interface CorePortalContextProps {
    history: History;
    dataProvider: DataProvider;
    children: ReactNode;
    routerType: 'hash' | 'browser';
    basename: string;

}

const CorePortalContext: FunctionComponent<CorePortalContextProps> = ({
    dataProvider,
    children,
    routerType = "browser", basename
}) => {
    return (
        <Provider store={coreStore.store}>
            <DataProviderContext.Provider value={dataProvider}>
                <Router
                    history={createHistory(
                        routerType,
                        basename
                    )}
                >
                    {children}
                </Router>
            </DataProviderContext.Provider>
        </Provider>
    );
};
export default CorePortalContext;
