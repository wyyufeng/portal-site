import { DataProviderMethod } from '../dataProvider/DataProviderContext';
declare function useDataProvider<T>(method: string): DataProviderMethod<T>;
export default useDataProvider;
