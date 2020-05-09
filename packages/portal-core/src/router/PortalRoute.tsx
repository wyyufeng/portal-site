import React from 'react';
import { Route, RouteProps, matchPath, useLocation } from 'react-router-dom';
import { FunctionComponent } from 'react';
export interface PortalRouteProps extends RouteProps {
    exclude: Array<string> | string;
}

const PortalRoute: FunctionComponent<PortalRouteProps> = ({ exclude, path, ...rest }) => {
    const matchAll = path === '*';
    if (exclude && !matchAll) {
        console.warn("The prop 'exclude' could only be used when path is '*' ");
    }

    const excludePaths = exclude ? (Array.isArray(exclude) ? exclude : [exclude]) : null;
    const location = useLocation();
    // 如果exclude 匹配了当前路径
    const match = excludePaths && excludePaths.some((path) => matchPath(path, location.pathname));
    if (match) return null;
    return <Route path={path} {...rest}></Route>;
};

export default PortalRoute;
