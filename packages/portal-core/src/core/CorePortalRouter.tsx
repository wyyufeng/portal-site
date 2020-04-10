import React, { useEffect, FunctionComponent } from 'react';
import { coreStore } from '../store';
import { Router } from 'react-router-dom';
import { History } from 'history';

const CorePortalRouter: FunctionComponent<{
    children: any;
    root: string;
    history: History;
}> = ({ children, root, history }) => {
    useEffect(() => {
        coreStore.store.dispatch(coreStore.actions('routesMap').getRoutes(root));
    }, [root]);

    return <Router history={history}>{children}</Router>;
};

export default CorePortalRouter;
