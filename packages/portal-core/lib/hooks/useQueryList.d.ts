import { ListItem } from "portal-data-cms";
declare const useQueryList: (resource: string, page: number, size: number) => {
    records?: ListItem[];
    total?: number;
    error: any;
    loading: boolean;
    loaded: boolean;
    pages: number;
    page: number;
};
export default useQueryList;
