import React from 'react';
import { PortalSite } from 'portal-core';
import cms, { createHttpClient, routesMap } from '../packages/portal-data-cms/src';
import { createBrowserHistory } from 'history';
const http = createHttpClient(
    'https://www.fastmock.site/mock/3f757e04fc524a3b552de633cd63de6c/testcms',
    'ce72b99f3d484ef4ba927d656e89205b',
    'C7843A866062AFC06F736F6DF793183B'
);
function App({ children }) {
    return (
        <PortalSite
            models={[routesMap]}
            dataProvider={cms(http, 'test')}
            history={createBrowserHistory()}
            root={'cn'}
        >
            {children}
        </PortalSite>
    );
}
export default App;
