import React, { FunctionComponent } from 'react';
import CorePortalContext from './CorePortalContext';
import CorePortalRouter from './CorePortalRouter';
// import { DataProvider } from '../dataProvider/DataProviderContext';
import { History } from 'history';

export interface PortalSiteProps {
    dataProvider: any;
    models?: any[];
    history: History;
    basename?: string;
    root: string;
    store?: any;
}

const PortalSite: FunctionComponent<PortalSiteProps> = ({
    children,
    dataProvider,
    models = [],
    history,
    root,
    store
}) => {
    return (
        <CorePortalContext store={store} models={models} dataProvider={dataProvider}>
            <CorePortalRouter root={root} history={history}>
                {children}
            </CorePortalRouter>
        </CorePortalContext>
    );
};
export default PortalSite;
