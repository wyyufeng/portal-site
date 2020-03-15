import React, { useEffect, FunctionComponent } from 'react';
import { coreStore } from '../store';
import { Router } from 'react-router-dom';
import { History } from 'history';

const RouteContext: FunctionComponent<{
    children: any;
    root: string;
    history: History;
    baename?: string;
}> = ({ children, root, history }) => {
    useEffect(() => {
        coreStore.store.dispatch(coreStore.actions('routesMap').getRoutes(root));
    }, [root]);

    return <Router history={history}>{children}</Router>;
};

export default RouteContext;
