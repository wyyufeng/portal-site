import { createContext } from 'react';

import defaultDataProvider from './defaultDataProvider';
export type Method = (any, ...args: any[]) => Promise<any>;

export type DataProvider = {
    [method: string]: Method;
};
const DataProviderContext = createContext<DataProvider>(defaultDataProvider);

DataProviderContext.displayName = 'Fuck';

export default DataProviderContext;
