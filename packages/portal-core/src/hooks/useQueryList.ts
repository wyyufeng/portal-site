import useQuery from './useQuery';
import { ListItem } from '@portal-site/types';
import { ListResponse } from '../dataProvider/DataProviderContext';

export type QueryListParams = {
  resource: string
  pagination: {
    page: number,
    size: number
  },
  params?: any
  formatResult?: (res: any) => any,
  onSuccess?: (data: any, params: any) => void,
  onError?: (error: any, params: any) => void
}
export type QueryListResult = {
  records: undefined | Array<ListItem>;
  total?: number;
  error: any;
  loading: boolean;
  pages: undefined | number;
  page: undefined | number;
}

const useQueryList = ({ resource, pagination, onError, onSuccess, formatResult, params }: QueryListParams): QueryListResult => {
  const { data, error, loading } = useQuery<ListResponse>({
    api: 'queryList', options: {
      resource, size: pagination.size, page: pagination.page, params
    }, formatResult, onSuccess, onError
  })
  return {
    records: data?.records, error, loading, pages: data?.pages, total: data?.total, page: data?.page
  }
}
export default useQueryList
