import { ListItem } from "portal-types";
declare const useQueryList: (resource: string, page: number, size: number, onSuccess?: (any: any) => any, onFailure?: (any: any) => any) => {
    records?: ListItem[];
    total?: number;
    error: any;
    loading: boolean;
    loaded: boolean;
    pages: number;
    page: number;
};
export default useQueryList;
