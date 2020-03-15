import React from 'react';
import { PortalContext, routesMap, RouteContext } from '../packages/portal-core/src';
import cms, { createHttpClient } from '../packages/portal-data-cms/src';
import { createBrowserHistory } from 'history';
const http = createHttpClient('http://api', 'appid', 'appkey');

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
