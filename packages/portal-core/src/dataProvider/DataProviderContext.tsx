import { createContext } from 'react';

import { DataProvider } from '../types';

const DataProviderContext = createContext<DataProvider>({});

DataProviderContext.displayName = 'DataProviderContext';

export default DataProviderContext;
