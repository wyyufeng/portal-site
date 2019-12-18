import { FunctionComponent, ReactNode } from 'react';
import { History } from 'history';
import { DataProvider } from '../types';
export interface CorePortalContextProps {
    history: History;
    dataProvider: DataProvider;
    children: ReactNode;
    routerType: 'hash' | 'browser';
    basename: string;
}
declare const CorePortalContext: FunctionComponent<CorePortalContextProps>;
export default CorePortalContext;
