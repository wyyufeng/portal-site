import { useEffect, FunctionComponent } from 'react';
import { coreStore } from '../store';

const RouteContext: FunctionComponent<{ children: any, root: string }> = ({ children, root }) => {

    useEffect(() => {
        coreStore.store.dispatch(coreStore.actions('routesMap').getRoutes(root))
    }, [root])

    return children
}

export default RouteContext