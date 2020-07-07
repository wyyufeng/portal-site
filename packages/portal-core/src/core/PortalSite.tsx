import React, { FunctionComponent, useEffect } from 'react';
import CorePortalContext from './CorePortalContext';
import CorePortalRouter from './CorePortalRouter';
import { coreStore } from '../store';
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
  useEffect(() => {
    coreStore.store.dispatch(coreStore.actions('routesMap').getRoutes(root));
  }, [root]);
  return (
    <CorePortalContext store={store} models={models} dataProvider={dataProvider}>
      <CorePortalRouter history={history}>{children}</CorePortalRouter>
    </CorePortalContext>
  );
};
export default PortalSite;
