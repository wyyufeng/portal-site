function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var mpa = _interopDefault(require('@mpfe/mpa'));
var reactRouterDom = require('react-router-dom');

var DataProviderContext = React.createContext({});
DataProviderContext.displayName = 'DataProviderContext';

function createModels(models, dataProvider) {
  return models.map(function (model) {
    return model(dataProvider);
  });
}

var coreStore = mpa({
  silence: true
});

var CorePortalContext = function CorePortalContext(_ref) {
  var dataProvider = _ref.dataProvider,
      children = _ref.children,
      _ref$models = _ref.models,
      models = _ref$models === void 0 ? [] : _ref$models,
      store = _ref.store;
  coreStore.useModel.apply(coreStore, createModels(models, dataProvider));
  coreStore.run();
  return React__default.createElement(reactRedux.Provider, {
    store: store || coreStore.store
  }, React__default.createElement(DataProviderContext.Provider, {
    value: dataProvider
  }, children));
};

var CorePortalRouter = function CorePortalRouter(_ref) {
  var children = _ref.children,
      root = _ref.root,
      history = _ref.history;
  React.useEffect(function () {
    coreStore.store.dispatch(coreStore.actions('routesMap').getRoutes(root));
  }, [root]);
  return React__default.createElement(reactRouterDom.Router, {
    history: history
  }, children);
};

var PortalSite = function PortalSite(_ref) {
  var children = _ref.children,
      dataProvider = _ref.dataProvider,
      _ref$models = _ref.models,
      models = _ref$models === void 0 ? [] : _ref$models,
      history = _ref.history,
      root = _ref.root,
      store = _ref.store;
  return React__default.createElement(CorePortalContext, {
    store: store,
    models: models,
    dataProvider: dataProvider
  }, React__default.createElement(CorePortalRouter, {
    root: root,
    history: history
  }, children));
};

function useDataProvider(method) {
  var dataProvider = React.useContext(DataProviderContext);
  return dataProvider[method];
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var useQueryList = function useQueryList(resource, page, size, onSuccess, onFailure) {
  var dataProvider = useDataProvider('queryList');

  var _useState = React.useState({
    records: [],
    total: 0,
    error: null,
    loading: true,
    loaded: false,
    pages: 0,
    page: 1
  }),
      state = _useState[0],
      setState = _useState[1];

  React.useEffect(function () {
    setState(function (prevState) {
      return _extends(_extends({}, prevState), {}, {
        loading: true
      });
    });
    dataProvider({
      resource: resource,
      page: page,
      size: size
    }).then(function (data) {
      onSuccess && onSuccess(data);
      setState(_extends(_extends({}, data), {}, {
        loaded: true,
        error: null,
        loading: false
      }));
    })["catch"](function (error) {
      onFailure && onFailure(error);
      setState({
        error: error,
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

var useRoutesMap = function useRoutesMap() {
  var routesMap = reactRedux.useSelector(function (state) {
    return state.routesMap.root;
  });
  return routesMap;
};

var useQueryOne = function useQueryOne(resource, path) {
  var dataProvider = useDataProvider('queryOneById');

  var _useState = React.useState({
    loading: true,
    loaded: false,
    data: {},
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  React.useEffect(function () {
    setState({
      data: {},
      loaded: false,
      loading: true,
      error: null
    });
    dataProvider(resource, path).then(function (data) {
      setState(_extends(_extends({}, data), {}, {
        loaded: true,
        loading: false,
        error: null
      }));
    })["catch"](function (err) {
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

var PortalLink = function PortalLink(_ref) {
  var href = _ref.href,
      children = _ref.children,
      to = _ref.to,
      rest = _objectWithoutPropertiesLoose(_ref, ["href", "children", "to"]);

  if (typeof href === 'string') {
    return React__default.createElement("a", Object.assign({
      rel: "noopener noreferrer",
      href: href
    }, rest), children);
  }

  return React__default.createElement(reactRouterDom.Link, Object.assign({
    to: to
  }, rest), children);
};

var PortalRoute = function PortalRoute(_ref) {
  var exclude = _ref.exclude,
      path = _ref.path,
      rest = _objectWithoutPropertiesLoose(_ref, ["exclude", "path"]);

  var matchAll = path === '*';

  if (exclude && !matchAll) {
    console.warn("The prop 'exclude' could only be used when path is '*' ");
  }

  var excludePaths = exclude ? Array.isArray(exclude) ? exclude : [exclude] : null;
  var location = reactRouterDom.useLocation();
  var match = excludePaths && excludePaths.some(function (path) {
    return reactRouterDom.matchPath(path, location.pathname);
  });
  if (match) return null;
  return React__default.createElement(reactRouterDom.Route, Object.assign({
    path: path
  }, rest));
};

Object.keys(reactRouterDom).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return reactRouterDom[k];
        }
    });
});
exports.CorePortalContext = CorePortalContext;
exports.CorePortalRouter = CorePortalRouter;
exports.Link = PortalLink;
exports.PortalSite = PortalSite;
exports.Route = PortalRoute;
exports.coreStore = coreStore;
exports.createModels = createModels;
exports.useDataProvider = useDataProvider;
exports.useQueryList = useQueryList;
exports.useQueryOne = useQueryOne;
exports.useRoutesMap = useRoutesMap;
//# sourceMappingURL=index.js.map
