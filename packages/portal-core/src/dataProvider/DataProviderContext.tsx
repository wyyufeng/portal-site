import { createContext } from 'react';

import defaultDataProvider from './defaultDataProvider';

export type DataProvider = {
    [method: string]: any;
};
const DataProviderContext = createContext<DataProvider>({});

DataProviderContext.displayName = 'DataProviderContext';

export default DataProviderContext;
