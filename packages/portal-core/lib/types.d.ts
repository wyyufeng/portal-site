export declare type DataProvider = {
    [method: string]: (params: any) => Promise<any>;
};
