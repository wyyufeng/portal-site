/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { useRoutesMap, useLocation } from 'portal-core';

const Breadcrumb: FunctionComponent = function () {

    const routes = useRoutesMap();
    const location = useLocation();
    const pathname = location.pathname;
    console.log(routes, pathname)
    return <div className="portal-breadcrumb">

    </div>
}

export default Breadcrumb