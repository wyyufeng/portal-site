export declare type Method = (any: any, ...args: any[]) => Promise<any>;
declare const useDataProvider: (method?: string) => Method;
export default useDataProvider;
