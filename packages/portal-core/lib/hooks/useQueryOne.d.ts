declare const useQueryOne: (resource: string, path: string) => {
    loading: boolean;
    loaded: boolean;
    data: any;
    error?: any;
};
export default useQueryOne;
