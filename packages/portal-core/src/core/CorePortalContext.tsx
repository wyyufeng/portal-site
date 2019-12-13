import React, { FunctionComponent, ComponentType, useContext, ReactNode } from 'react';
import { History } from 'history'
import { DataProvider } from '../types'
import DataProviderContext from '../dataProvider/DataProviderContext';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom'
import { coreStore } from '../store'
import createHistory from '../router/history';
export interface CorePortalContextProps {
    history: History,
    dataProvider: DataProvider,
    children: ReactNode,
    routerOptions: {
        type: 'hash' | 'browser',
        basename: string | undefined
    }
}

const CorePortalContext: FunctionComponent<CorePortalContextProps> = ({ dataProvider, children, routerOptions = {
    type: "browser"
} }) => {
    return <Provider store={coreStore.store}>
        <DataProviderContext.Provider value={dataProvider}>
            <Router history={createHistory(routerOptions.type, routerOptions.basename)}>
                <Switch>
                    {children}
                </Switch>
            </Router>
        </DataProviderContext.Provider>
    </Provider>
}
export default CorePortalContext