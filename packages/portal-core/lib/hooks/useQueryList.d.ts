declare const useQueryList: (resource: string, page: number, size: number, onSuccess?: (any: any) => any) => {
    records?: any[];
    total?: number;
    error: any;
    loading: boolean;
    loaded: boolean;
    pages: number;
    page: number;
};
export default useQueryList;
