/// <reference types="react" />
export declare type Method = (any: any, ...args: any[]) => Promise<any>;
export declare type DataProvider = {
    [method: string]: Method;
};
declare const DataProviderContext: import("react").Context<DataProvider>;
export default DataProviderContext;
