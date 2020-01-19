import { ListItem } from "portal-data-cms";
declare const useQueryOne: (resource: string, path: string) => {
    loading: boolean;
    loaded: boolean;
    data: {} | ListItem;
    error?: any;
};
export default useQueryOne;
