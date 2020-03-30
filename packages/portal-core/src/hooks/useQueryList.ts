import { useEffect, useState } from "react";
import useDataProvider from "./useDataProvider";
import { ListItem } from "portal-types";
const useQueryList = (
  resource: string,
  page: number,
  size: number,
  onSuccess?: (any) => any,
  onFailure?: (any) => any
): {
  records?: Array<ListItem>;
  total?: number;
  error: any;
  loading: boolean;
  loaded: boolean;
  pages: number;
  page: number;
} => {
  const dataProvider = useDataProvider("queryList");
  const [state, setState] = useState({
    records: [],
    total: 0,
    error: null,
    loading: true,
    loaded: false,
    pages: 0,
    page: 1
  });
  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        loading: true
      };
    });
    dataProvider({ resource, page, size })
      .then(data => {
        onSuccess && onSuccess(data)
        setState({
          ...data,
          loaded: true,
          error: null,
          loading: false
        });
      })
      .catch(error => {
        onFailure && onFailure(error);
        setState({
          error,
          loading: false,
          loaded: false,
          records: [],
          total: 0,
          pages: 0,
          page: 0
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource, page]);
  return state;
};

export default useQueryList;
