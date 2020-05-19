import axios from 'axios';
import CryptoJS from 'crypto-js';
import { takeLatest, put, call } from 'redux-saga/effects';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var RouteMap = /*#__PURE__*/function () {
  function RouteMap() {
    this.parent = {};
    this.route = '';
    this.children = [];
    this.name = '';
    this.isHome = false;
    this.id = '';
  }

  _createClass(RouteMap, [{
    key: "path",
    get: function get() {
      return toPath(this);
    }
  }]);

  return RouteMap;
}();

function toPath(route) {
  if (route.parent) {
    return toPath(route.parent) + '/' + route.route;
  }

  return route.route || '';
}

var _flatResultCache = [];

function _flatRoutes(root) {
  var children = root.children;

  if (children.length > 0) {
    return children.map(function (i) {
      return _flatRoutes(i);
    });
  }

  !root.isRoot && _flatResultCache.push(root);
}

var RootRouteMap = /*#__PURE__*/function () {
  function RootRouteMap() {
    this.isRoot = true;
    this.parent = null;
    this.children = [];
  }

  var _proto = RootRouteMap.prototype;

  _proto.flat = function flat() {
    if (_flatResultCache.length > 0) return _flatResultCache;

    _flatRoutes(this);

    return _flatResultCache;
  };

  _proto.findByPath = function findByPath(path) {
    return this.flat().find(function (route) {
      return route.path === path;
    });
  };

  return RootRouteMap;
}();

function mapDataToRoute(data, parent) {
  var route = new RouteMap();
  var children = data.subChannel ? data.subChannel.map(function (i) {
    return mapDataToRoute(i, route);
  }) : [];
  route.children = children;
  route.name = data.channelName;
  route.route = data.channelNo;
  route.parent = parent;
  route.isHome = data.channelNo === 'Home';
  return route;
}

var getImgFromHtml = function getImgFromHtml(content) {
  if (content === void 0) {
    content = '';
  }

  var imgReg = /<img.*?(?:>|\/>)/gi;
  var srcReg = /src=['"]?([^'"]*)['"]?/i;
  var arr = content.match(imgReg);
  if (arr === null || arr.length < 0) return '';
  var src = arr[0].match(srcReg);
  return src ? src[1] : '';
};
var html2text = function html2text(content, _temp) {
  var _ref = _temp === void 0 ? {
    length: 100,
    wordBreak: false
  } : _temp,
      length = _ref.length;

  var s = content === null || content === void 0 ? void 0 : content.replace(/<[^>]+>|&[^>]+;/g, '').trim();
  if (s === '' || s === undefined) return '';
  return s.substr(0, length) + '...';
};

var listMapper = function listMapper(source) {
  return source.map(function (item) {
    var _item$thumbAppImg, _item$source, _item$linkUrl;

    return {
      $raw_data: item,
      id: item.archivesId,
      channelNo: item.channelNo,
      channelName: item.channelName,
      title: item.title,
      subTitle: item.subTitle,
      publishDate: item.publishDate.split(' ')[0],
      parentChannelNo: item.parentChannelNo,
      imgSrc: encodeURI(item.thumbImg ? item.thumbImg : getImgFromHtml(item.content)),
      appImgSrc: encodeURI((_item$thumbAppImg = item.thumbAppImg) != null ? _item$thumbAppImg : ''),
      content: item.content,
      $content: html2text(item.content),
      abstract: item.description,
      source: (_item$source = item.source) != null ? _item$source : '',
      linkUrl: (_item$linkUrl = item.linkUrl) != null ? _item$linkUrl : '',
      isShowTitle: item.isShowTitle,
      visitCount: item.visitCount
    };
  });
};
function listOneMapper(source) {
  var _source$thumbAppImg;

  return {
    $raw_data: source,
    id: source.archivesId,
    channelNo: source.channelNo,
    channelName: source.channelName,
    title: source.title,
    subTitle: source.subTitle,
    publishDate: source.publishDate.split(' ')[0],
    parentChannelNo: source.parentChannelNo,
    imgSrc: encodeURI(source.thumbImg ? source.thumbImg : getImgFromHtml(source.content)),
    appImgSrc: encodeURI((_source$thumbAppImg = source.thumbAppImg) != null ? _source$thumbAppImg : ''),
    abstract: source.description,
    content: source.content,
    source: source.source || '',
    linkUrl: source.linkUrl || '',
    isShowTitle: source.isShowTitle,
    visitCount: source.visitCount
  };
}

function createHttpClient(baseURL, appId, appKey) {
  var httpClient = axios.create({
    baseURL: baseURL
  });
  httpClient.interceptors.request.use(authInterceptor(appKey, appId));
  httpClient.interceptors.response.use(function (res) {
    return res;
  }, resErrorInterceptor);
  return httpClient;
}
function encryptApiKey(key) {
  var r = Math.random() + '';
  var randomSix = r.substr(-6, 6);
  var text = randomSix + +new Date();
  var encrypt = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypt.toString();
}

function authInterceptor(key, id) {
  return function (req) {
    req.headers.token = encryptApiKey(key);
    req.headers.appId = id;
    return req;
  };
}

function resErrorInterceptor(err) {
  console.group('🚨🚨httpError');
  console.log('message:', err.message);
  console.log('stack', err.stack);
  console.groupEnd();
  Promise.reject(err);
  return err;
}

var cmsDataProvider = (function (httpClient, gateway) {
  if (gateway === void 0) {
    gateway = 'sw-cms';
  }

  return {
    queryRoutes: function queryRoutes(resource) {
      var endPoint = "/" + gateway + "/api/queryAllChannel/" + resource;
      return new Promise(function (resolve, reject) {
        httpClient.get(endPoint).then(function (res) {
          var root = new RootRouteMap();
          var routeMaps = res.data.data.records.map(function (r) {
            return mapDataToRoute(r, root);
          });
          root.children = routeMaps;
          resolve(root);
        }).catch(function (err) {
          return reject(err);
        });
      });
    },
    queryList: function queryList(_ref) {
      var resource = _ref.resource,
          page = _ref.page,
          size = _ref.size;
      var endPoint = "/" + gateway + "/api/queryArchivesList";
      return new Promise(function (resolve, reject) {
        httpClient.post(endPoint, {
          entity: {
            channelNo: resource
          },
          param: {
            pageSize: size,
            pageNum: page
          }
        }).then(function (res) {
          resolve({
            records: listMapper(res.data.data.records),
            pages: res.data.data.pages,
            page: res.data.data.current,
            total: res.data.data.total,
            $$rawData: res.data.data
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    queryOneById: function queryOneById(resource, path) {
      if (path === void 0) {
        path = 'queryArchivesById';
      }

      return new Promise(function (resolve, reject) {
        return httpClient.get("/" + gateway + "/api/" + path + "/" + resource).then(function (res) {
          resolve({
            data: listOneMapper(res.data.data)
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    likeIt: function likeIt(resource) {
      return new Promise(function (resolve, reject) {
        return httpClient.get("/" + gateway + "/api/doStarByArcId/" + resource).then(function (res) {
          resolve({
            code: res.data.code
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    unLikeIt: function unLikeIt(resource) {
      return new Promise(function (resolve, reject) {
        return httpClient.get("/" + gateway + "/api/cancelStarByActId/" + resource).then(function (res) {
          resolve({
            code: res.data.code
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  };
});

var routeMaps = function routeMaps(dataProvider) {
  return {
    namespace: 'routesMap',
    state: {
      loading: true,
      root: new RootRouteMap(),
      error: null
    },
    reducer: {
      getRoutes: function getRoutes(state) {
        return state;
      },
      getRoutesSuccess: function getRoutesSuccess(_, _ref) {
        var payload = _ref.payload;
        return {
          loading: false,
          root: payload
        };
      },
      getRoutesFailure: function getRoutesFailure(state, _ref2) {
        var meta = _ref2.meta;
        return {
          loading: false,
          error: meta.error,
          root: state.root
        };
      }
    },
    effect: function effect(actions) {
      var _marked = /*#__PURE__*/regeneratorRuntime.mark(worker);

      function worker(action) {
        var records;
        return regeneratorRuntime.wrap(function worker$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return call([dataProvider, 'queryRoutes'], action.payload);

              case 3:
                records = _context.sent;
                _context.next = 6;
                return put(actions.getRoutesSuccess(records));

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _context.next = 12;
                return put(actions.getRoutesFailure(null, null, _context.t0));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _marked, null, [[0, 8]]);
      }

      return /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return takeLatest(actions.getRoutes, worker);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      });
    }
  };
};

export { cmsDataProvider, createHttpClient, encryptApiKey, getImgFromHtml, html2text, listMapper, listOneMapper, routeMaps as routesMap };
//# sourceMappingURL=index.modern.js.map
