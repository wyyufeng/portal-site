import { useMemo } from 'react';
import useQuery from './useQuery';
import { ListItem } from '@portal-site/types';
import { ListResponse } from '../dataProvider/DataProviderContext';

export type QueryListParams = {
    resource: string;
    pagination: {
        page: number;
        size: number;
    };
    params?: any;
    formatResult?: (res: any) => any;
    onSuccess?: (data: any, params: any) => void;
    onError?: (error: any, params: any) => void;
};
export type QueryListResult = {
    records: undefined | Array<ListItem>;
    total?: number;
    error: any;
    loading: boolean;
    pages: undefined | number;
    page: undefined | number;
};

const useQueryList = ({
    resource,
    pagination,
    onError,
    onSuccess,
    formatResult,
    params
}: QueryListParams): QueryListResult => {
    const memoOptions = useMemo(() => {
        return {
            resource,
            size: pagination.size,
            page: pagination.page,
            params
        };
    }, [resource, pagination.size, pagination.page, params]);
    const { response, error, loading } = useQuery<ListResponse>({
        api: 'queryList',
        options: memoOptions,
        formatResult,
        onSuccess,
        onError
    });
    return {
        records: response?.records ?? [],
        error,
        loading,
        pages: response?.pages ?? 0,
        total: response?.total,
        page: response?.page ?? 0
    };
};
export default useQueryList;
