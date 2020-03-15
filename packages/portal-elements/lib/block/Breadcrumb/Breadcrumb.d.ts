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
declare const Breadcrumb: FunctionComponent<IBreadcrumbProps>;
export default Breadcrumb;
