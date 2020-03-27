import { FunctionComponent } from 'react';
import { History } from 'history';
declare const RouteContext: FunctionComponent<{
    children: any;
    root: string;
    history: History;
    baename?: string;
}>;
export default RouteContext;
