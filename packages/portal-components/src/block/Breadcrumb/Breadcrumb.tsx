/** @ts ignore */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Link, useRoutesMap, useLocation } from '@portal-site/core';
export interface Route {
    path: string;
    name: string;
}

export interface IBreadcrumbProps {
    routes?: Route[];
    separator?: React.ReactNode;
    home?: string;
}

const Breadcrumb: FunctionComponent<IBreadcrumbProps> = function({ routes = [] }) {
    const routesMap = useRoutesMap();
    const location = useLocation();

    const pathname = location.pathname;
    console.log(pathname);
    const _routeArr = pathname.split('/').filter(Boolean);
    const current = routesMap.findByPath(_routeArr[0]);
    console.log(current);

    // const _routes: Route[] = [
    //     {
    //         name: '首页',
    //         path: home
    //     },
    //     {
    //         name: current.children[0].name,
    //         path: current.children[0].path
    //     }
    // ];
    const items = routes.map((route) => {
        return (
            <Link to={route.path}>
                <span key={route.name}>{route.name}</span>
            </Link>
        );
    });

    return <div className="portal-breadcrumb">{items}</div>;
};

export default Breadcrumb;
