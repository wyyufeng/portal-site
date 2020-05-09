/// <reference types="react" />
export declare type Response = {
    code: number;
    loaded: boolean;
    loading: boolean;
    error: any;
};
export declare type ItemResponse = Response & {
    data: any;
};
export declare type ListResponse = Response & {
    records: any[];
    total: number;
    pages: number;
    page: number;
};
export declare type DataProviderMethod<T> = (arg: any, ...rest: any[]) => Promise<T>;
export interface DataProvider {
    [method: string]: (arg: any, ...rest: any[]) => Promise<any>;
}
declare const DataProviderContext: import("react").Context<DataProvider>;
export default DataProviderContext;
