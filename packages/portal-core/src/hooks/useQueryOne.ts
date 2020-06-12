
import useQuery from './useQuery';
import { ListItem } from '@portal-site/types';
import { useMemo } from 'react';
export type QueryOneParams = {
  resource: string
  params?: {
    path?: string,
    [key: string]: any
  },
  formatResult?: (res: any) => any,
  onSuccess?: (data: any, params: any) => void,
  onError?: (error: any, params: any) => void

}
export type QueryOneResult = {
  data: ListItem | { [prop: string]: any };
  error: any;
  loading: boolean;
}
const useQueryOne = function (params: QueryOneParams): QueryOneResult {
  const memoOptions = useMemo(() => {
    return {
      resource: params.resource, params: params.params, formatResult: params.formatResult, onSuccess: params.onSuccess, onError: params.onError
    }
  }, [params.resource, params.params, params.formatResult, params.onSuccess, params.onError])
  const { response, loading, error } = useQuery<ListItem>({ api: "queryOneById", options: memoOptions });
  return {
    data: response?.data ?? {}, loading, error
  }
}
export default useQueryOne

