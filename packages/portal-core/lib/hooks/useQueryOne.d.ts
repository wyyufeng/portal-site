import { ListItem } from "portal-types";
declare const useQueryOne: (resource: string, path?: string) => {
    loading: boolean;
    loaded: boolean;
    data: ListItem | {
        [prop: string]: any;
    };
    error?: any;
};
export default useQueryOne;
