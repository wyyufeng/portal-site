import { createContext } from 'react';
import defaultDataProvider from './defaultDataProvider';
var DataProviderContext = createContext(defaultDataProvider);
DataProviderContext.displayName = 'Fuck';
export default DataProviderContext;
