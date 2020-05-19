/** @ts ignore */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
export interface Route {
    path: string;
    name: string;
}

export interface IBreadcrumbProps {
    routes?: Route[];
    separator?: React.ReactNode;
    home?: string;
}

const Breadcrumb: FunctionComponent<IBreadcrumbProps> = function () {
    return <div className="portal-breadcrumb"></div>;
};

export default Breadcrumb;
