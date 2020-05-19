import { useEffect, useState } from 'react';
import { ListItem } from '@portal-site/types';
import useDataProvider from './useDataProvider';
import { ItemResponse } from '../dataProvider/DataProviderContext';


export interface QueryOneEffectResult {
  loading: boolean;
  loaded: boolean;
  data: ListItem | { [prop: string]: any };
  error?: any;
}

const useQueryOne = (
  resource: string,
  path?: string
): QueryOneEffectResult => {
  const dataProvider = useDataProvider<ItemResponse>('queryOneById');
  const [state, setState] = useState({
    loading: true,
    loaded: false,
    data: {},
    error: null
  });
  useEffect(() => {
    setState({
      data: {},
      loaded: false,
      loading: true,
      error: null
    });
    dataProvider(resource, path)
      .then((data) => {
        setState({
          ...data,
          loaded: true,
          loading: false,
          error: null
        });
      })
      .catch((err) => {
        setState({
          data: {},
          loaded: false,
          loading: false,
          error: err
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource]);
  return state;
};

export default useQueryOne;
