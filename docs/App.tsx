import React from 'react';
import { PortalContext, routesMap, RouteContext } from 'portal-core';
import cms, { createHttpClient } from '../packages/portal-data-cms/src';
import { createBrowserHistory } from 'history';
const http = createHttpClient(
    'https://www.fastmock.site/mock/3f757e04fc524a3b552de633cd63de6c/testcms',
    'ce72b99f3d484ef4ba927d656e89205b',
    'C7843A866062AFC06F736F6DF793183B'
);
function App({ children }) {
    return (
        <PortalContext models={[routesMap]} dataProvider={cms(http, 'test')}>
            <RouteContext history={createBrowserHistory()} root={'cn'}>
                {children}
            </RouteContext>
        </PortalContext>
    );
}
export default App;
