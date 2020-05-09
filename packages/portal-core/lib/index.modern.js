import React, { createContext, useEffect, useContext, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import mpa from '@mpfe/mpa';
import { Router, Link, useLocation, matchPath, Route } from 'react-router-dom';
export * from 'react-router-dom';

const DataProviderContext = createContext({});
DataProviderContext.displayName = 'DataProviderContext';

function createModels(models, dataProvider) {
  return models.map(model => model(dataProvider));
}

const coreStore = mpa({
  silence: true
});

const CorePortalContext = ({
  dataProvider,
  children,
  models: _models = [],
  store
}) => {
  coreStore.useModel(...createModels(_models, dataProvider));
  coreStore.run();
  return React.createElement(Provider, {
    store: store || coreStore.store
  }, React.createElement(DataProviderContext.Provider, {
    value: dataProvider
  }, children));
};

const CorePortalRouter = ({
  children,
  root,
  history
}) => {
  useEffect(() => {
    coreStore.store.dispatch(coreStore.actions('routesMap').getRoutes(root));
  }, [root]);
  return React.createElement(Router, {
    history: history
  }, children);
};

const PortalSite = ({
  children,
  dataProvider,
  models: _models = [],
  history,
  root,
  store
}) => {
  return React.createElement(CorePortalContext, {
    store: store,
    models: _models,
    dataProvider: dataProvider
  }, React.createElement(CorePortalRouter, {
    root: root,
    history: history
  }, children));
};

function useDataProvider(method) {
  const dataProvider = useContext(DataProviderContext);
  return dataProvider[method];
}

const useQueryList = (resource, page, size, onSuccess, onFailure) => {
  const dataProvider = useDataProvider('queryList');
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
      return { ...prevState,
        loading: true
      };
    });
    dataProvider({
      resource,
      page,
      size
    }).then(data => {
      onSuccess && onSuccess(data);
      setState({ ...data,
        loaded: true,
        error: null,
        loading: false
      });
    }).catch(error => {
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
  }, [resource, page]);
  return state;
};

const useRoutesMap = () => {
  const routesMap = useSelector(state => state.routesMap.root);
  return routesMap;
};

const useQueryOne = (resource, path) => {
  const dataProvider = useDataProvider('queryOneById');
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
    dataProvider(resource, path).then(data => {
      setState({ ...data,
        loaded: true,
        loading: false,
        error: null
      });
    }).catch(err => {
      setState({
        data: {},
        loaded: false,
        loading: false,
        error: err
      });
    });
  }, [resource]);
  console.log(state);
  return state;
};

const PortalLink = ({
  href,
  children,
  to,
  ...rest
}) => {
  if (typeof href === 'string') {
    return React.createElement("a", Object.assign({
      rel: "noopener noreferrer",
      href: href
    }, rest), children);
  }

  return React.createElement(Link, Object.assign({
    to: to
  }, rest), children);
};

const PortalRoute = ({
  exclude,
  path,
  ...rest
}) => {
  const matchAll = path === '*';

  if (exclude && !matchAll) {
    console.warn("The prop 'exclude' could only be used when path is '*' ");
  }

  const excludePaths = exclude ? Array.isArray(exclude) ? exclude : [exclude] : null;
  const location = useLocation();
  const match = excludePaths && excludePaths.some(path => matchPath(path, location.pathname));
  if (match) return null;
  return React.createElement(Route, Object.assign({
    path: path
  }, rest));
};

export { CorePortalContext, CorePortalRouter, PortalLink as Link, PortalSite, PortalRoute as Route, coreStore, createModels, useDataProvider, useQueryList, useQueryOne, useRoutesMap };
//# sourceMappingURL=index.modern.js.map
