import { useEffect, useState } from "react";
import { ListItem } from "portal-data-cms";
import useDataProvider from "./useDataProvider";

const useQueryOne = (
  resource: string,
  path: string
): {
  loading: boolean;
  loaded: boolean;
  data: ListItem | {};
  error?: any;
} => {
  const dataProvider = useDataProvider("queryOneById");
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
      .then(data => {
        setState({
          ...data,
          loaded: true,
          loading: false,
          error: null
        });
      })
      .catch(err => {
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
