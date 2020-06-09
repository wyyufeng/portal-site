
import { useQuery } from './useQuery';
import { ListItem } from '@portal-site/types';
export type QueryOneParams = {
  resource: string
  params: {
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
export const useQueryOne = function (params: QueryOneParams) {
  const { data, loading, error } = useQuery<ListItem>({ api: "queryOneById", options: params });
  return {
    data, loading, error
  }
}
