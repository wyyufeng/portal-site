import { useContext } from 'react';
import DataProviderContext, { DataProviderMethod } from '../dataProvider/DataProviderContext';

function useDataProvider<T>(method: string): DataProviderMethod<T> {
    const dataProvider = useContext(DataProviderContext);
    return dataProvider[method];
}

export default useDataProvider;
