import { ListItem } from '@portal-site/types';
declare const useQueryOne: (resource: string, path?: string | undefined) => {
    loading: boolean;
    loaded: boolean;
    data: ListItem | {
        [prop: string]: any;
    };
    error?: any;
};
export default useQueryOne;
