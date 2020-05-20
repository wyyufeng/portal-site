import React, { FunctionComponent } from 'react';
import { PortalSite, useQueryOne, useDataProvider } from '../packages/portal-core';
import { createBrowserHistory } from 'history';
import { createHttpClient, routesMap, cmsDataProvider } from '../packages/portal-data';
const http = createHttpClient(
    'https://www.fastmock.site/mock/3f757e04fc524a3b552de633cd63de6c/',
    'ce72b99f3d484ef4ba927d656e89205b',
    'C7843A866062AFC06F736F6DF793183B'
);
const App: FunctionComponent = ({ children }) => {
    return (
        <PortalSite
            models={[routesMap]}
            dataProvider={cmsDataProvider(http, 'testcms')}
            history={createBrowserHistory()}
            root={'cn'}
        >
            {children}
        </PortalSite>
    );
};
export default App;
