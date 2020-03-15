import React from 'react';
import { PortalContext, routesMap, RouteContext } from '../packages/portal-core/src';
import cms, { createHttpClient } from '../packages/portal-data-cms/src';
import { createBrowserHistory } from 'history';
const http = createHttpClient(
    'http://220.191.224.251:80/api/',
    'ce72b99f3d484ef4ba927d656e89205b',
    'C7843A866062AFC06F736F6DF793183B'
);

function App({ children }) {
    return (
        <PortalContext models={[routesMap]} dataProvider={cms(http)}>
            <RouteContext history={createBrowserHistory()} root={'cn'}>
                {children}
            </RouteContext>
        </PortalContext>
    );
}
export default App;
