import { FunctionComponent, ReactNode } from 'react';
import { DataProvider } from '../types';
export interface CorePortalContextProps {
    dataProvider: DataProvider;
    children: ReactNode;
    models: any[];
}
declare const CorePortalContext: FunctionComponent<CorePortalContextProps>;
export default CorePortalContext;
