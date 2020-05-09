import { ListItem } from '@portal-site/types';
declare const useQueryList: (resource: string, page: number, size: number, onSuccess?: ((arg: any) => any) | undefined, onFailure?: ((arg: any) => any) | undefined) => {
    records: ListItem[];
    total?: number | undefined;
    error: any;
    loading: boolean;
    loaded: boolean;
    pages: number;
    page: number;
};
export default useQueryList;
