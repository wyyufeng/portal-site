import React, { FunctionComponent } from 'react';
import { PortalSite } from '@portal-site/core';
import { createHttpClient, routesMap, cmsDataProvider } from '@portal-site/data';
import { createBrowserHistory } from 'history';
const http = createHttpClient(
    'https://www.fastmock.site/mock/3f757e04fc524a3b552de633cd63de6c/testcms',
    'ce72b99f3d484ef4ba927d656e89205b',
    'C7843A866062AFC06F736F6DF793183B'
);
const App: FunctionComponent = ({ children }) => {
    return (
        <PortalSite
            models={[routesMap]}
            dataProvider={cmsDataProvider(http, 'test')}
            history={createBrowserHistory()}
            root={'cn'}
        >
            {children}
        </PortalSite>
    );
};
export default App;
