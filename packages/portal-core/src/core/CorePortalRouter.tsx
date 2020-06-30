import React, { FunctionComponent } from 'react';

import { Router } from 'react-router-dom';
import { History } from 'history';

const CorePortalRouter: FunctionComponent<{
  children: any;
  history: History;
}> = ({ children, history }) => {
  return <Router history={history}>{children}</Router>;
};

export default CorePortalRouter;
