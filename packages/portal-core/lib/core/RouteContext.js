import React, { useEffect } from 'react';
import { coreStore } from '../store';
import { Router } from 'react-router-dom';
var RouteContext = function (_a) {
    var children = _a.children, root = _a.root, history = _a.history;
    useEffect(function () {
        coreStore.store.dispatch(coreStore.actions('routesMap').getRoutes(root));
    }, [root]);
    return React.createElement(Router, { history: history }, children);
};
export default RouteContext;
