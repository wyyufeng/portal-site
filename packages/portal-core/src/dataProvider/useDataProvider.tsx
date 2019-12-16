import { useContext } from 'react';
import DataProviderContext from './DataProviderContext';
import { DataProvider } from '../types';

const useDataProvider = (): DataProvider => {
    const dataProvider = useContext(DataProviderContext)
    return dataProvider
}

export default useDataProvider