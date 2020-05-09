import { createContext } from 'react';

export type Response = {
    code: number;
    loaded: boolean;
    loading: boolean;
    error: any;
};
export type ItemResponse = Response & {
    data: any;
};
export type ListResponse = Response & {
    records: any[];
    total: number;
    pages: number;
    page: number;
};
export type DataProviderMethod<T> = (arg: any, ...rest: any[]) => Promise<T>;
// export type DataProvider = {
//   [method: string]: DataProviderMethod<any>;
// };

export interface DataProvider {
    [method: string]: (arg: any, ...rest: any[]) => Promise<any>;
}

const DataProviderContext = createContext<DataProvider>({});

DataProviderContext.displayName = 'DataProviderContext';

export default DataProviderContext;
