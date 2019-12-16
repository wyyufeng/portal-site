import { FunctionComponent, ReactNode } from 'react';
import { History } from 'history';
import { DataProvider } from '../types';
export interface CorePortalContextProps {
    history: History;
    dataProvider: DataProvider;
    children: ReactNode;
    routerOptions: {
        type: 'hash' | 'browser';
        basename: string | undefined;
    };
}
declare const CorePortalContext: FunctionComponent<CorePortalContextProps>;
export default CorePortalContext;
