import { FunctionComponent } from 'react';
import { History } from 'history';
export interface PortalSiteProps {
    dataProvider: any;
    models?: any[];
    history: History;
    basename?: string;
    root: string;
    store?: any;
}
declare const PortalSite: FunctionComponent<PortalSiteProps>;
export default PortalSite;
