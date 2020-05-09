import { RouteProps } from 'react-router-dom';
import { FunctionComponent } from 'react';
export interface PortalRouteProps extends RouteProps {
    exclude: Array<string> | string;
}
declare const PortalRoute: FunctionComponent<PortalRouteProps>;
export default PortalRoute;
