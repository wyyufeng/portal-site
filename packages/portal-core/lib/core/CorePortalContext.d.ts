import { FunctionComponent, ReactNode } from 'react';
import { DataProvider } from '../dataProvider/DataProviderContext';
export interface CorePortalContextProps {
    dataProvider: DataProvider;
    children: ReactNode;
    models: any[];
}
declare const CorePortalContext: FunctionComponent<CorePortalContextProps>;
export default CorePortalContext;
