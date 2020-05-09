function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@emotion/core');
var React = require('react');
var React__default = _interopDefault(React);
var objectFitImages = _interopDefault(require('object-fit-images'));
var cls = _interopDefault(require('classnames'));
var core$1 = require('@portal-site/core');
var reactFeather = require('react-feather');

var fallback_svg = require("./no-img~ZZhrWrAK.svg");

var ConfigContext = React__default.createContext({
  assetsBasePath: '',
  pictureFallback: ''
});
var ConfigConsumer = ConfigContext.Consumer;
var ConfigProvider = ConfigContext.Provider;

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);\n  background-size: 400% 100%;\n   animation:", "  1.6s ease infinite;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  list-style:none;\n  margin:0;\n  padding:0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\noutline:none;\nborder:none;\nbackground-color:transparent;\ncursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var button_base = core.css(_templateObject());
var list_base = core.css(_templateObject2());
var pulse = core.keyframes(_templateObject3());
var skeleton_animation = core.css(_templateObject4(), pulse);

var emptyObj = {};

var Picture = function Picture(_ref) {
  var source = _ref.source,
      _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === void 0 ? fallback_svg : _ref$fallback,
      _ref$base = _ref.base,
      base = _ref$base === void 0 ? '' : _ref$base,
      alt = _ref.alt,
      className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? emptyObj : _ref$style,
      Wrapper = _ref.wrapper;
  var imgRef = React.useRef(null);
  var config = React.useContext(ConfigContext);

  var _useState = React.useState(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _base = base || config.assetsBasePath;

  var _fallback = fallback || config.pictureFallback;

  var sourceSets = React.useMemo(function () {
    var result = Array.isArray(source) ? source.filter(Boolean).map(function (src) {
      return encodeURI(_base + src);
    }) : [source].filter(Boolean).map(function (src) {
      return encodeURI(_base + src);
    });
    result.push(_fallback);
    return result;
  }, [source, _base, _fallback]);
  React.useEffect(function () {
    var current = imgRef.current;
    current.src = sourceSets.shift();

    function onError() {
      var src = sourceSets.length && sourceSets.shift();
      src && (current.src = src);

      if (!sourceSets.length && !fallback) {
        current.style.display = 'none';
      }
    }

    function onLoad() {
      objectFitImages(current, {
        watchMQ: true
      });
      setLoading(false);
    }

    if (current) {
      current.onload = onLoad;
      current.onerror = onError;
    }

    return function () {
      current.src = '';
    };
  }, [sourceSets]);
  return core.jsx(Wrapper, {
    style: style,
    className: cls('portal-picture', className),
    css: [{
      textAlign: 'center',
      display: 'flex',
      borderRadius: '2px'
    }, loading && skeleton_animation]
  }, core.jsx("img", {
    css: {
      width: '100%',
      maxHeight: '100%',
      objectFit: 'cover',
      margin: 0,
      padding: 0,
      borderRadius: 'inherit'
    },
    alt: alt,
    ref: imgRef
  }));
};
Picture.defaultProps = {
  base: '',
  alt: '图片',
  wrapper: 'div',
  className: ''
};

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n                background-color: #f2f2f2;\n                margin-top: 16px;\n                display: inline-block;\n            "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n                height: 20px;\n                margin-top: 16px;\n                background: #f2f2f2;\n                display: inline-block;\n                margin: 0;\n                padding: 0;\n            "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n                display: inline-block;\n                vertical-align: top;\n                background: #f2f2f2;\n                width: 32px;\n                height: 32px;\n                line-height: 32px;\n                ", "\n            "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n                display: flex;\n                justify-content: space-around;\n                padding: 16px 24px;\n                border-bottom: 1px solid #f0f0f0;\n            "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n                width: 268px;\n                height: 320px;\n                margin: 16px;\n                box-shadow: 0px 0px 5px 3px #f7f9fa;\n            "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n                        display: inline-block;\n                        width: 100%;\n                        &.portal-skeleton-animation {\n                            .portal-skeleton-element {\n                                ", "\n                            }\n                        }\n                    "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var Skeleton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Skeleton, _React$Component);

  function Skeleton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Skeleton.prototype;

  _proto.renderContent = function renderContent() {
    var renderSkeleton = this.props.renderSkeleton;

    if (typeof renderSkeleton === 'function') {
      return renderSkeleton();
    }

    return core.jsx(Paragraph, null);
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        loading = _this$props.loading,
        children = _this$props.children,
        animation = _this$props.animation,
        className = _this$props.className,
        _this$props$style = _this$props.style,
        style = _this$props$style === void 0 ? emptyObj : _this$props$style;

    if (loading) {
      return core.jsx("div", {
        className: cls('portal-skeleton', className, {
          'portal-skeleton-animation': animation
        }),
        style: style,
        css: core.css(_templateObject$1(), skeleton_animation)
      }, this.renderContent());
    }

    return children;
  };

  _proto.render = function render() {
    return this.renderChildren();
  };

  return Skeleton;
}(React.Component);
Skeleton.defaultProps = {
  loading: true,
  animation: true
};
var Card = function Card() {
  return core.jsx("div", {
    className: "portal-skeleton-card",
    css: core.css(_templateObject2$1())
  }, core.jsx(Avatar, {
    style: {
      width: '100%',
      height: 200
    },
    shape: "rect"
  }), core.jsx("div", {
    style: {
      padding: 14
    }
  }, core.jsx(Title, null), core.jsx(Line, null), core.jsx(Line, null)));
};
var List = function List() {
  return core.jsx("div", {
    className: "portal-skeleton-list",
    css: core.css(_templateObject3$1())
  }, core.jsx(Avatar, {
    style: {
      width: 48,
      height: 48
    }
  }), core.jsx("div", {
    style: {
      width: 'calc(100% - 120px)'
    }
  }, core.jsx(Title, null), core.jsx(Paragraph, {
    rows: 3
  })));
};
var Paragraph = function Paragraph(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 4 : _ref$rows,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '70%' : _ref$width,
      className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? emptyObj : _ref$style;
  return core.jsx("div", {
    className: cls('portal-skeleton-paragraph', className)
  }, [].concat(Array(rows)).map(function (_, index) {
    return core.jsx(Line, {
      width: getWidth(index, rows, width),
      style: style,
      key: index
    });
  }));
};
var Avatar = function Avatar(_ref2) {
  var _ref2$shape = _ref2.shape,
      shape = _ref2$shape === void 0 ? 'circle' : _ref2$shape,
      className = _ref2.className,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? emptyObj : _ref2$style;
  return core.jsx("span", {
    className: cls('portal-skeleton-avatar', 'portal-skeleton-element', className),
    style: style,
    css: core.css(_templateObject4$1(), shape === 'circle' && 'border-radius:50%')
  });
};
var Title = function Title(_ref3) {
  var className = _ref3.className,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? emptyObj : _ref3$style,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '35%' : _ref3$width;
  return core.jsx("h3", {
    css: core.css(_templateObject5()),
    className: cls('portal-skeleton-title', 'portal-skeleton-element', className),
    style: _extends({
      width: width
    }, style)
  });
};
var Line = function Line(_ref4) {
  var _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? '100%' : _ref4$width,
      _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? '14px' : _ref4$height,
      className = _ref4.className,
      _ref4$style = _ref4.style,
      style = _ref4$style === void 0 ? emptyObj : _ref4$style;
  return core.jsx("span", {
    style: _extends({
      width: width,
      height: height
    }, style),
    css: core.css(_templateObject6()),
    className: cls('portal-skeleton-line', 'portal-skeleton-element', className)
  });
};
Skeleton.Paragraph = Paragraph;
Skeleton.Avatar = Avatar;
Skeleton.Title = Title;
Skeleton.Line = Line;
Skeleton.Card = Card;
Skeleton.List = List;

function getWidth(index, rows, width) {
  if (Array.isArray(width)) {
    return width[index];
  }

  if (rows - 2 === index) {
    return '85%';
  }

  if (rows - 1 === index) {
    return width;
  }

  return undefined;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n                                        display: none;\n                                        width: 200px;\n                                        position: absolute;\n                                        top: 80px;\n                                        justify-content: center;\n                                    "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n                                    display: flex;\n                                    justify-content: center;\n                                    position: relative;\n                                    flex-wrap: wrap;\n                                    height: 80px;\n                                    align-items: center;\n                                    & > a {\n                                        width: 100%;\n                                        text-align: center;\n                                    }\n                                    &:hover {\n                                        nav {\n                                            display: flex;\n                                        }\n                                    }\n                                "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n                height: 88px;\n                width: 800px;\n                ul {\n                    list-style: none;\n                    margin: 0;\n                    padding: 0;\n                }\n                a {\n                    text-decoration: none;\n                    color: #000;\n                }\n            "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Nav = function Nav(_ref) {
  var _ref$exclude = _ref.exclude,
      exclude = _ref$exclude === void 0 ? [] : _ref$exclude;
  var routes = core$1.useRoutesMap();
  return core.jsx("nav", {
    className: "portal-nav",
    css: core.css(_templateObject$2())
  }, core.jsx("ul", {
    className: "portal-nav-firstmenu",
    css: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100%'
    }
  }, routes.children.filter(function (item) {
    return !exclude.includes(item.route);
  }).map(function (route) {
    return core.jsx("li", {
      css: core.css(_templateObject2$2()),
      className: "portal-nav-firstmenu-li",
      key: route.name
    }, core.jsx(core$1.NavLink, {
      to: route.path
    }, route.name), core.jsx("nav", {
      className: "portal-nav-second",
      css: core.css(_templateObject3$2())
    }, core.jsx("ul", {
      className: "portal-nav-secondmenu"
    }, route.children.filter(function (item) {
      return !exclude.includes(item.route);
    }).map(function (child) {
      return core.jsx("li", {
        key: child.name
      }, core.jsx(core$1.NavLink, {
        to: child.path
      }, child.name));
    }))));
  })));
};
Nav.defaultProps = {
  exclude: []
};

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n                margin: 0 auto;\n                width: ", "px;\n            "]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var Center = function Center(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1250 : _ref$width,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["tag", "width", "children"]);

  return core.jsx("div", Object.assign({
    className: "portal-center",
    css: core.css(_templateObject$3(), width)
  }, rest), children);
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    width: 100%;\n                "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n                background-color: rgba(0, 0, 0, 0.5);\n                height: 85px;\n                width: 100%;\n                position: absolute;\n                top: 0;\n                z-index: 10;\n            "]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var Header = function Header(_ref) {
  var logo = _ref.logo,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '官网' : _ref$title,
      extra = _ref.extra;
  var isSrc = typeof logo === 'string';
  return core.jsx("header", {
    className: "portal-header",
    css: core.css(_templateObject$4())
  }, core.jsx(Center, {
    css: core.css(_templateObject2$3())
  }, core.jsx("div", {
    className: "portal-logo"
  }, isSrc ? core.jsx(core$1.Link, {
    css: {},
    to: "/",
    title: "\u9996\u9875"
  }, core.jsx("img", {
    css: {
      verticalAlign: 'middle',
      height: 30
    },
    src: logo,
    alt: "logo"
  })) : logo, core.jsx("h1", {
    css: {
      fontSize: 0
    }
  }, title)), core.jsx(Nav, {
    exclude: ['Slide']
  }), core.jsx("div", {
    className: "portal-header-extra"
  }, extra)));
};

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

var Page = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose$1(Page, _React$Component);

  function Page() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Page.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        page = _this$props.page,
        onClick = _this$props.onClick,
        selected = _this$props.selected,
        className = _this$props.className,
        href = _this$props.href;
    return React.createElement("li", {
      title: "\u7B2C" + page + "\u9875",
      className: classnames(className, {
        active: selected
      })
    }, React.createElement("a", {
      href: href,
      onClick: onClick
    }, page));
  };

  return Page;
}(React.Component);

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;

var isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

var isConcurrentMode = A;

var isContextConsumer = function (a) {
  return z(a) === k;
};

var isContextProvider = function (a) {
  return z(a) === h;
};

var isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

var isForwardRef = function (a) {
  return z(a) === n;
};

var isFragment = function (a) {
  return z(a) === e;
};

var isLazy = function (a) {
  return z(a) === t;
};

var isMemo = function (a) {
  return z(a) === r;
};

var isPortal = function (a) {
  return z(a) === d;
};

var isProfiler = function (a) {
  return z(a) === g;
};

var isStrictMode = function (a) {
  return z(a) === f;
};

var isSuspense = function (a) {
  return z(a) === p;
};

var isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};
var reactIs_development = createCommonjsModule(function (module, exports) {
  if (process.env.NODE_ENV !== "production") {
    (function () {
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      }

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    var test1 = new String('abc');
    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    }

    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      throw new Error(message);
    } catch (x) {}
  };
}

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;

        try {
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;
var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function () {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }

  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    if (propType === 'symbol') {
      return true;
    }

    if (!propValue) {
      return false;
    }

    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  }

  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  }

  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  }

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = reactIs;
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    module.exports = factoryWithThrowingShims();
  }
});
var PagerConfig = React.createContext({});

var Pager = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose$1(Pager, _React$Component);

  function Pager() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      current: 1,
      jumpPage: ''
    };

    _this.createHref = function (page) {
      var _this$getAssignProps = _this.getAssignProps(),
          pageCount = _this$getAssignProps.pageCount,
          pageRange = _this$getAssignProps.pageRange,
          hrefCreator = _this$getAssignProps.hrefCreator;

      return hrefCreator ? hrefCreator(page, pageCount, pageRange) : undefined;
    };

    _this.onJumpInputChange = function (e) {
      var _this$getAssignProps2 = _this.getAssignProps(),
          pageCount = _this$getAssignProps2.pageCount;

      var value = e.target.value;
      var int = Number(value);
      if (int === 0 || Number.isNaN(int)) return _this.setState({
        jumpPage: ''
      });

      _this.setState({
        jumpPage: Math.max(1, Math.min(int, pageCount))
      });
    };

    _this.onJumpBtnClick = function (e) {
      e.preventDefault();
      var jumpPage = _this.state.jumpPage;

      if (typeof jumpPage === 'number') {
        _this.props.onPageChange(jumpPage);

        _this.setState({
          jumpPage: ''
        });
      }
    };

    _this.onPageClick = function (page) {
      _this.setState({
        current: page
      });

      _this.props.onPageChange(page);
    };

    _this.onPrevPageClick = function (e) {
      e.preventDefault();
      var current = _this.state.current;
      if (current === 1) return;

      _this.setState(function (prevState) {
        return {
          current: prevState.current - 1
        };
      });

      _this.props.onPageChange(current - 1);
    };

    _this.onNextPageClick = function (e) {
      e.preventDefault();
      var current = _this.state.current;
      var pageCount = _this.props.pageCount;
      if (current >= pageCount) return;

      _this.setState(function (prevState) {
        return {
          current: prevState.current + 1
        };
      });

      _this.props.onPageChange(current + 1);
    };

    return _this;
  }

  Pager.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    if (typeof props.forcePage !== 'undefined') {
      return {
        current: props.forcePage
      };
    }

    return null;
  };

  var _proto = Pager.prototype;

  _proto.getAssignProps = function getAssignProps() {
    return Object.assign({}, this.props, this.context);
  };

  _proto.getPageNode = function getPageNode(page) {
    var _this2 = this;

    var current = this.state.current;

    var _this$getAssignProps3 = this.getAssignProps(),
        pageClassName = _this$getAssignProps3.pageClassName;

    return React.createElement(Page, {
      href: this.createHref(page),
      className: pageClassName,
      key: page,
      selected: current === page,
      onClick: function onClick(e) {
        e.preventDefault();

        _this2.onPageClick(page);
      },
      page: page
    });
  };

  _proto.pagination = function pagination() {
    var items = [];

    var _this$getAssignProps4 = this.getAssignProps(),
        pageCount = _this$getAssignProps4.pageCount,
        pageRange = _this$getAssignProps4.pageRange;

    var current = this.state.current;

    if (pageCount <= pageRange) {
      for (var i = 0; i < pageCount; i++) {
        items.push(this.getPageNode(i + 1));
      }
    } else {
      var half = Math.floor(pageRange / 2);
      var start = current - half + 1 - pageRange % 2;
      var end = current + half;

      if (current <= pageRange - half) {
        start = 1;
        end = pageRange;
      }

      if (current >= pageCount - half) {
        end = pageCount;
        start = pageCount - pageRange + 1;
      }

      var itPage = start;

      while (itPage <= end) {
        items.push(this.getPageNode(itPage));
        itPage++;
      }
    }

    return items;
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$getAssignProps5 = this.getAssignProps(),
        firstLabel = _this$getAssignProps5.firstLabel,
        lastLabel = _this$getAssignProps5.lastLabel,
        showFirst = _this$getAssignProps5.showFirst,
        showLast = _this$getAssignProps5.showLast,
        pagerClassName = _this$getAssignProps5.pagerClassName,
        prevLabel = _this$getAssignProps5.prevLabel,
        nextLabel = _this$getAssignProps5.nextLabel,
        pageCount = _this$getAssignProps5.pageCount,
        hrefCreator = _this$getAssignProps5.hrefCreator,
        pageRange = _this$getAssignProps5.pageRange,
        containerClassName = _this$getAssignProps5.containerClassName,
        showTotal = _this$getAssignProps5.showTotal,
        showJump = _this$getAssignProps5.showJump,
        autoHide = _this$getAssignProps5.autoHide;

    if (pageCount <= 1 && autoHide) return null;
    var _this$state = this.state,
        current = _this$state.current,
        jumpPage = _this$state.jumpPage;
    var showRightMore = pageCount > pageRange && current < Math.ceil(pageCount - pageRange / 2);
    var showLeftMore = pageCount > pageRange && current > Math.ceil(pageRange / 2);
    return React.createElement("div", {
      className: containerClassName
    }, React.createElement("ul", {
      className: pagerClassName
    }, showFirst && React.createElement("li", {
      className: classnames('first-page', 'page-btn', {
        disable: pageCount === 1
      })
    }, React.createElement("a", {
      href: hrefCreator ? hrefCreator(1, pageCount, pageRange) : undefined,
      onClick: function onClick(e) {
        e.preventDefault();

        _this3.onPageClick(1);
      }
    }, firstLabel)), React.createElement("li", {
      className: classnames('prev-page', 'page-btn', {
        disable: current === 1
      })
    }, React.createElement("a", {
      href: hrefCreator && current > 1 ? hrefCreator(current - 1, pageCount, pageRange) : 'javascript:void(0)',
      onClick: this.onPrevPageClick
    }, prevLabel)), showLeftMore && React.createElement("li", {
      className: 'more-page page-btn disable'
    }, React.createElement("a", null, "...")), this.pagination(), showRightMore && React.createElement("li", {
      className: 'more-page page-btn disable'
    }, React.createElement("a", null, "...")), React.createElement("li", {
      className: classnames('next-page', 'page-btn', {
        disable: current >= pageCount
      })
    }, React.createElement("a", {
      href: hrefCreator && current < pageCount ? hrefCreator(current + 1, pageCount, pageRange) : undefined,
      onClick: this.onNextPageClick
    }, nextLabel)), showLast && React.createElement("li", {
      className: classnames('last-page', 'page-btn', {
        disable: pageCount === 1
      })
    }, React.createElement("a", {
      href: hrefCreator ? hrefCreator(pageCount, pageCount, pageRange) : undefined,
      onClick: function onClick(e) {
        e.preventDefault();

        _this3.onPageClick(pageCount);
      }
    }, lastLabel))), showTotal && React.createElement("span", {
      className: 'page-total'
    }, "\u603B\u9875\u6570:", pageCount), showJump && React.createElement("div", {
      className: 'page-jump'
    }, React.createElement("input", {
      value: jumpPage,
      onChange: this.onJumpInputChange,
      type: 'text'
    }), React.createElement("button", {
      onClick: this.onJumpBtnClick,
      type: 'button'
    }, "\u786E\u5B9A")));
  };

  return Pager;
}(React.Component);

Pager.contextType = PagerConfig;
Pager.defaultProps = {
  prevLabel: '上一页',
  nextLabel: '下一页',
  pagerClassName: 'mp-pages',
  firstLabel: '首页',
  lastLabel: '末页',
  showFirst: true,
  showLast: true,
  pageClassName: 'page-item',
  containerClassName: 'mp-pager',
  showTotal: true,
  showJump: true,
  pageRange: 5,
  autoHide: true
};
Pager.propTypes = {
  pageCount: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
};

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n                            display: flex;\n\n                            position: relative;\n                            background: 0 0;\n                            margin: 1rem 0 0;\n                            width: 100%;\n                            padding: 0 0 0;\n                            top: 0;\n                            left: 0;\n                            box-shadow: none;\n                            border-top: none;\n                            justify-content: flex-end;\n                        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteralLoose(["\n                            margin: 7px 0 7px;\n                            font-size: 14px;\n                            line-height: 1em;\n                            color: rgba(0, 0, 0, 0.6);\n                        "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteralLoose(["\n                            font-size: 16px;\n                            color: #595757;\n                            font-weight: normal;\n                            margin: -4px 0 0 1px;\n                        "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteralLoose(["\n                        display: inline-block;\n                        margin: 6px 0 10px;\n                    "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["\n                    flex: 1 1 auto;\n                    background: 0 0;\n                    margin: 0;\n                    padding: 0;\n                    box-shadow: none;\n                    font-size: 1em;\n                    border: none;\n                    min-width: 0;\n                    width: auto;\n                    align-self: top;\n                    padding-left: 1.5em;\n                "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n                    position: relative;\n                    flex: 0 0 auto;\n                    float: none;\n                    margin: 0;\n                    padding: 0;\n                "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n                        align-items: center;\n                    "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Meta = function Meta(_ref) {
  var avatar = _ref.avatar,
      title = _ref.title,
      description = _ref.description,
      secondary = _ref.secondary,
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? false : _ref$center,
      actions = _ref.actions;
  return core.jsx("div", {
    className: "portal-list-item-meta",
    css: [{
      display: 'flex',
      flex: 1
    }, center && core.css(_templateObject$5())]
  }, core.jsx("div", {
    css: core.css(_templateObject2$4()),
    className: "portal-list-item-meta-avatar"
  }, avatar), core.jsx("div", {
    className: "portal-list-item-meta-main",
    css: core.css(_templateObject3$3())
  }, core.jsx("div", {
    css: core.css(_templateObject4$2()),
    className: "portal-list-item-meta-header"
  }, core.jsx("h4", {
    css: core.css(_templateObject5$1())
  }, title), core.jsx("span", {
    css: core.css(_templateObject6$1())
  }, secondary)), core.jsx("div", {
    className: "portal-list-item-meta-description",
    css: {
      lineHeight: '1.8',
      textAlign: 'justify',
      fontSize: '14px',
      color: '#898989'
    }
  }, description), actions && core.jsx("div", {
    css: core.css(_templateObject7()),
    className: "portal-list-item-meta-action"
  }, actions)));
};

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["\n                        margin-left: 40px;\n                    "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n                display: flex;\n                width: 100%;\n                min-height: 0;\n                background: 0 0;\n                padding: 18px 0;\n                border-bottom: 1px solid #f0f0f0;\n                &:last-child {\n                    border-bottom: none;\n                }\n            "]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Item = function Item(_ref) {
  var children = _ref.children,
      _ref$extra = _ref.extra,
      extra = _ref$extra === void 0 ? null : _ref$extra;
  var extraNodes = [];

  if (extra) {
    if (!Array.isArray(extra)) {
      extra = [extra];
    }

    React__default.Children.forEach(extra, function (child, index) {
      extraNodes.push(React__default.cloneElement(child, {
        key: index
      }));
    });
  }

  return core.jsx("li", {
    css: core.css(_templateObject$6()),
    className: "portal-list-item"
  }, children, extra && core.jsx("div", {
    css: core.css(_templateObject2$5()),
    className: "portal-list-item-extra"
  }, extraNodes));
};
Item.Meta = Meta;

var List$1 = function List(_ref) {
  var resource = _ref.resource,
      renderItem = _ref.renderItem,
      _ref$pagination = _ref.pagination,
      pagination = _ref$pagination === void 0 ? false : _ref$pagination,
      onListChange = _ref.onListChange,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 8 : _ref$size;
  var location = core$1.useLocation();
  var history = core$1.useHistory();
  var params = new URLSearchParams(location.search);
  var currentPage = params.get('page') || 0;

  var _useState = React.useState(+currentPage || 1),
      page = _useState[0],
      setPage = _useState[1];

  var _useQueryList = core$1.useQueryList(resource, page, size),
      _useQueryList$records = _useQueryList.records,
      records = _useQueryList$records === void 0 ? [] : _useQueryList$records,
      pages = _useQueryList.pages;

  var items = records.map(function (item, index) {
    return renderItem(item, index);
  });

  var onPageChange = function onPageChange(page) {
    setPage(page);
    onListChange && onListChange();
    params.set('page', page + '');
    history.push({
      pathname: location.pathname,
      search: '?' + params.toString()
    });
  };

  var childrenList = [];
  React__default.Children.forEach(items, function (child, index) {
    childrenList.push(React__default.cloneElement(child, {
      key: index
    }));
  });
  return React__default.createElement("div", {
    className: "portal-list"
  }, React__default.createElement("ul", {
    css: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    className: "portal-list-items"
  }, childrenList), pagination && React__default.createElement("div", {
    css: {
      textAlign: 'center',
      marginTop: 70
    },
    className: "portal-list-pagination"
  }, React__default.createElement(Pager, {
    hrefCreator: function hrefCreator(page) {
      return "?page=" + page;
    },
    forcePage: page,
    pageCount: pages,
    onPageChange: onPageChange
  })));
};
List$1.defaultProps = {
  renderItem: function renderItem(item) {
    return React__default.createElement(Item, null, item.title);
  }
};
List$1.Item = Item;

function _templateObject5$2() {
  var data = _taggedTemplateLiteralLoose(["\n                        margin-top: 30px;\n                        min-height: 300px;\n                        line-height: 1.625;\n                        font-size: 16px;\n                        color: #434343;\n                        & > p {\n                            margin: 15px 0;\n                            text-indent: 2em;\n                        }\n                    "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteralLoose(["\n                            & > * {\n                                font-size: 16px;\n                                color: #b7b6b6;\n                                text-align: center;\n                                line-height: 2;\n                                display: inline;\n                                font-style: normal;\n                                margin: 0 10px;\n                            }\n                        "]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose(["\n                            font-size: 24px;\n                            line-height: 1.5;\n                            margin: 0;\n                            padding: 0;\n                        "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n                        margin: 20px 0;\n                        line-height: 50px;\n                        color: #595757;\n                        text-align: center;\n                    "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

var Article = function Article(_ref) {
  var Title = _ref.title,
      Content = _ref.content,
      Pubdate = _ref.pubdate,
      Address = _ref.address,
      VisitCount = _ref.visitCount,
      Footer = _ref.footer,
      resource = _ref.resource,
      path = _ref.path;

  var _useQueryOne = core$1.useQueryOne(resource, path),
      data = _useQueryOne.data;

  var title = data.title,
      publishDate = data.publishDate,
      source = data.source,
      content = data.content,
      visitCount = data.visitCount;
  return core.jsx(Center, {
    width: 900
  }, core.jsx("article", {
    css: {
      textAlign: 'justify'
    },
    className: "portal-article"
  }, core.jsx("header", {
    className: "portal-article-header",
    css: core.css(_templateObject$7())
  }, core.jsx("h1", {
    css: core.css(_templateObject2$6())
  }, Title ? core.jsx(Title, {
    title: title
  }) : title), core.jsx("section", {
    className: "portal-article-info",
    css: core.css(_templateObject3$4())
  }, core.jsx("span", {
    className: "portal-article-info-pubdate"
  }, "\u53D1\u5E03\u65F6\u95F4\uFF1A", Pubdate ? core.jsx(Pubdate, {
    pubdate: publishDate
  }) : publishDate), core.jsx("address", {
    className: "portal-article-info-address",
    css: core.css(_templateObject4$3())
  }, "\u4FE1\u606F\u6765\u6E90\uFF1A", Address ? core.jsx(Address, {
    address: source
  }) : source), core.jsx("span", {
    className: "portal-article-info-visitcount"
  }, "\u6D4F\u89C8\u6B21\u6570\uFF1A", VisitCount ? core.jsx(VisitCount, {
    visitCount: visitCount
  }) : visitCount))), core.jsx("section", {
    className: "portal-article-content",
    css: core.css(_templateObject5$2())
  }, Content ? core.jsx(Content, {
    content: content
  }) : core.jsx("article", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  })), core.jsx("footer", null, Footer)));
};

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n                        color: #ef5353;\n                    "]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Like = function Like(_ref) {
  var resource = _ref.resource,
      cancellable = _ref.cancellable,
      Icon = _ref.icon;
  var likeFetch = core$1.useDataProvider('likeIt');
  var unLikeFetch = core$1.useDataProvider('unLikeIt');
  var btn = React.useRef(null);

  var _useState = React.useState(false),
      _active = _useState[0],
      setActive = _useState[1];

  React.useEffect(function () {
    var dom = btn.current;

    var clickHandle = function clickHandle() {
      if (dom.classList.contains('portal-like-active')) {
        if (cancellable) {
          unLikeFetch(resource).finally(function () {
            setActive(false);
          });
        }

        return;
      }

      setActive(true);
      likeFetch(resource).finally(function () {
        setActive(true);
      });
    };

    dom.addEventListener('click', clickHandle);
    return function () {
      dom.removeEventListener('click', clickHandle);
    };
  }, [resource, likeFetch, unLikeFetch]);
  return core.jsx("button", {
    ref: btn,
    className: cls('portal-like', {
      'portal-like-active': _active
    }),
    css: [button_base, _active && core.css(_templateObject$8())],
    type: "button"
  }, Icon);
};
Like.defaultProps = {
  icon: core.jsx(reactFeather.ThumbsUp, null),
  cancellable: false
};

var Breadcrumb = function Breadcrumb(_ref) {
  var _ref$routes = _ref.routes,
      routes = _ref$routes === void 0 ? [] : _ref$routes;
  var routesMap = core$1.useRoutesMap();
  var location = core$1.useLocation();
  var pathname = location.pathname;
  console.log(pathname);

  var _routeArr = pathname.split('/').filter(Boolean);

  var current = routesMap.findByPath(_routeArr[0]);
  console.log(current);
  var items = routes.map(function (route) {
    return core.jsx(core$1.Link, {
      to: route.path
    }, core.jsx("span", {
      key: route.name
    }, route.name));
  });
  return core.jsx("div", {
    className: "portal-breadcrumb"
  }, items);
};

var CarouselLib = /*#__PURE__*/function () {
  function CarouselLib(options) {
    this.container = options.container;
    this.nav = options.nav;
    this.slides = Array.from(this.container.querySelectorAll('.portal-carousel-slide'));
    this.navItems = Array.from(this.nav.querySelectorAll('.portal-carousel-nav-item'));
    this.activeIndex = 0;
    this._timer = null;
    this.duration = options.duration;
  }

  var _proto = CarouselLib.prototype;

  _proto.init = function init() {
    var _this = this;

    this.slides.forEach(function (node) {
      node.style.cssText = 'opacity:0;transform:scale(1,1);z-index:-1';
    });
    this.navItems.forEach(function (node, index) {
      node.dataset.itemIndex = index + '';
      node.addEventListener('click', function (e) {
        var target = e.currentTarget;

        _this.slideTo(+target.dataset.itemIndex);
      });
    });
    this.count = this.slides.length;
    this.animate(true).start();
    return this;
  };

  _proto._transitionEnd = function _transitionEnd(ele, fn) {
    var called = false;

    var callback = function callback() {
      if (!called) {
        fn.call(ele);
        called = true;
        ele.removeEventListener('transitionend', callback);
      }
    };

    ele.addEventListener('transitionend', callback);
  };

  _proto.animate = function animate(isFirst) {
    var _this2 = this;

    if (this.slides.length === 0) return this;

    if (isFirst) {
      this.currentItem = this.slides[0];
    } else {
      this.currentItem.style.opacity = '0';
      this.currentItem.style.transform = 'scale(1.5,1.5)';
      this.currentItem.style.transition = '1000ms cubic-bezier(0.5,0,0.2,1)';

      this._transitionEnd(this.currentItem, function () {
        this.style.zIndex = '-1';
        this.style.transform = 'scale(1,1)';
      });
    }

    this.currentItem = this.slides[this.activeIndex];
    this.currentItem.style.zIndex = '0';
    this.currentItem.style.opacity = '1';
    this.currentItem.style.transform = 'scale(1,1)';
    this.currentItem.style.transition = '800ms cubic-bezier(0,1,1,1)';

    this._transitionEnd(this.currentItem, function () {
      this.style.transform = 'scale(1.1,1.1)';
      this.style.transition = '5000ms linear';
    });

    this.navItems.forEach(function (nav, index) {
      index === _this2.activeIndex ? nav.classList.add('active') : nav.classList.remove('active');
    });
    return this;
  };

  _proto.slideTo = function slideTo(index) {
    this.activeIndex = index;
    this.destroy().start();
    this.animate(false);
  };

  _proto.start = function start() {
    var _this3 = this;

    this._timer = setInterval(function () {
      _this3.activeIndex++;
      if (_this3.activeIndex >= _this3.count) _this3.activeIndex = 0;

      _this3.animate(false);
    }, this.duration);
  };

  _proto.destroy = function destroy() {
    clearInterval(this._timer);
    return this;
  };

  return CarouselLib;
}();

function _templateObject5$3() {
  var data = _taggedTemplateLiteralLoose(["\n                                display: inline-block;\n                                width: 27px;\n                                height: 24px;\n                                margin: 0 5px;\n                                line-height: 3px;\n                                text-align: center;\n                                vertical-align: middle;\n                                cursor: pointer;\n                                background-color: #fff;\n                                border-radius: 50%;\n                            "]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteralLoose(["\n                        position: absolute;\n                        bottom: 5%;\n                        width: 100%;\n                        left: 0;\n                        text-align: center;\n                        & > .portal-carousel-nav-item.active {\n                            background-color: red;\n                        }\n                    "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteralLoose(["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose(["\n                width: 100%;\n                height: 100vh;\n                position: relative;\n                top: 0;\n                left: 0;\n                overflow: hidden;\n            "]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    z-index: 0;\n                "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var ins = null;
var timer = null;
var Carousel = function Carousel(_ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 200 : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 6000 : _ref$duration,
      _ref$resource = _ref.resource,
      resource = _ref$resource === void 0 ? 'slide' : _ref$resource;
  var wrapperRef = React.useRef(null);
  var navRef = React.useRef(null);
  var onSuccess = React.useCallback(function () {
    timer = setTimeout(function () {
      ins = new CarouselLib({
        container: wrapperRef.current,
        duration: duration,
        nav: navRef.current
      }).init();
    }, delay);
  }, [delay, duration]);
  React.useEffect(function () {
    return function () {
      ins && ins.destroy();
      clearTimeout(timer);
    };
  }, []);

  var _useQueryList = core$1.useQueryList(resource, 1, 10, onSuccess),
      records = _useQueryList.records;

  var items = records.map(function (item) {
    return core.jsx(Picture, {
      key: item.imgSrc,
      className: cls('portal-carousel-slide', core.css(_templateObject$9())),
      source: item.imgSrc
    });
  });
  return core.jsx("div", {
    className: "portal-carousel",
    css: core.css(_templateObject2$7())
  }, core.jsx("div", {
    className: "portal-carousel-container",
    css: core.css(_templateObject3$5())
  }, core.jsx("div", {
    ref: wrapperRef,
    className: "portal-carousel-wrappr"
  }, items), core.jsx("div", {
    ref: navRef,
    className: "portal-carousel-nav",
    css: core.css(_templateObject4$4())
  }, records.map(function (i) {
    return core.jsx("i", {
      className: "portal-carousel-nav-item",
      css: core.css(_templateObject5$3()),
      key: i.imgSrc
    });
  }))));
};
Carousel.defaultProps = {
  delay: 200,
  duration: 6000,
  resource: 'slide'
};

var ListView = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ListView, _Component);

  function ListView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ListView.prototype;

  _proto.render = function render() {
    return React__default.createElement("div", {
      className: "portal-listview"
    }, React__default.createElement(Center, null, React__default.createElement(Breadcrumb, {
      routes: [{
        name: '首页',
        path: '/'
      }, {
        name: '新闻',
        path: '/news/notice'
      }]
    }), React__default.createElement(List$1, {
      resource: "News",
      renderItem: function renderItem(item) {
        return React__default.createElement(List$1.Item, null, React__default.createElement(List$1.Item.Meta, {
          avatar: React__default.createElement("span", {
            style: {
              display: 'inline-block',
              width: 8,
              height: 8,
              border: '1px solid #dcb295',
              boxShadow: '0 0 0 1px #fff, 0 0 0 2px #dcb295',
              borderRadius: '50%'
            }
          }),
          title: item.title
        }), React__default.createElement("div", null, item.publishDate));
      }
    })));
  };

  return ListView;
}(React.Component);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule$1(function (module, exports) {
!function(e,t){module.exports=t(React__default);}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,r){t.exports=e;},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i);}else if("object"===o)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n);}();},function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)).createContext({});t.default=a;},function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(4)),o=n(r(2));t.PagerConfig=o.default,r(9),t.default=a.default;},function(e,t,r){var n,a=this&&this.__extends||(n=function(e,t){return (n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);})(e,t)},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(r(0)),s=i(r(1)),l=i(r(5)),c=i(r(6)),p=i(r(2)),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={current:1,jumpPage:""},t.createHref=function(e){var r=t.getAssignProps(),n=r.pageCount,a=r.pageRange,o=r.hrefCreator;return o?o(e,n,a):void 0},t.onJumpInputChange=function(e){var r=t.getAssignProps().pageCount,n=e.target.value,a=Number(n);if(0===a||Number.isNaN(a))return t.setState({jumpPage:""});t.setState({jumpPage:Math.max(1,Math.min(a,r))});},t.onJumpBtnClick=function(e){e.preventDefault();var r=t.state.jumpPage;"number"==typeof r&&(t.props.onPageChange(r),t.setState({jumpPage:""}));},t.onPageClick=function(e,r){t.setState({current:e}),t.props.onPageChange(e);},t.onPrevPageClick=function(e){e.preventDefault();var r=t.state.current;1!==r&&(t.setState((function(e){return {current:e.current-1}})),t.props.onPageChange(r-1));},t.onNextPageClick=function(e){e.preventDefault();var r=t.state.current;r>=t.props.pageCount||(t.setState((function(e){return {current:e.current+1}})),t.props.onPageChange(r+1));},t}return a(t,e),t.getDerivedStateFromProps=function(e,t){return void 0!==e.forcePage?{current:e.forcePage}:null},t.prototype.getAssignProps=function(){return Object.assign({},this.props,this.context)},t.prototype.getPageNode=function(e){var t=this,r=this.state.current,n=this.getAssignProps().pageClassName;return u.createElement(l.default,{href:this.createHref(e),className:n,key:e,selected:r===e,onClick:function(r){r.preventDefault(),t.onPageClick(e,r);},page:e})},t.prototype.pagination=function(){var e=[],t=this.getAssignProps(),r=t.pageCount,n=t.pageRange,a=this.state.current;if(r<=n)for(var o=0;o<r;o++)e.push(this.getPageNode(o+1));else {var i=Math.floor(n/2),u=a-i+1-n%2,s=a+i;a<=n-i&&(u=1,s=n),a>=r-i&&(s=r,u=r-n+1);for(var l=u;l<=s;)e.push(this.getPageNode(l)),l++;}return e},t.prototype.render=function(){var e=this,t=this.getAssignProps(),r=t.firstLabel,n=t.lastLabel,a=t.showFirst,o=t.showLast,i=t.pagerClassName,l=t.prevLabel,c=t.nextLabel,p=t.pageCount,f=t.hrefCreator,g=t.pageRange,d=t.containerClassName,h=t.showTotal,m=t.showJump,v=t.autoHide;if(p<=1&&v)return null;var y=this.state,_=y.current,b=y.jumpPage,P=p>g&&_<Math.ceil(p-g/2),C=p>g&&_>Math.ceil(g/2);return u.createElement("div",{className:d},u.createElement("ul",{className:i},a&&u.createElement("li",{className:s.default("first-page","page-btn",{disable:1===p})},u.createElement("a",{href:f?f(1,p,g):void 0,onClick:function(t){t.preventDefault(),e.onPageClick(1,t);}},r)),u.createElement("li",{className:s.default("prev-page","page-btn",{disable:1===_})},u.createElement("a",{href:f&&_>1?f(_-1,p,g):void 0,onClick:this.onPrevPageClick},l)),C&&u.createElement("li",{className:"more-page page-btn disable"},u.createElement("a",null,"...")),this.pagination(),P&&u.createElement("li",{className:"more-page page-btn disable"},u.createElement("a",null,"...")),u.createElement("li",{className:s.default("next-page","page-btn",{disable:_>=p})},u.createElement("a",{href:f&&_<p?f(_+1,p,g):void 0,onClick:this.onNextPageClick},c)),o&&u.createElement("li",{className:s.default("last-page","page-btn",{disable:1===p})},u.createElement("a",{href:f?f(p,p,g):void 0,onClick:function(t){t.preventDefault(),e.onPageClick(p,t);}},n))),h&&u.createElement("span",{className:"page-total"},"总页数:",p),m&&u.createElement("div",{className:"page-jump"},u.createElement("input",{value:b,onChange:this.onJumpInputChange,type:"text"}),u.createElement("button",{onClick:this.onJumpBtnClick,type:"button"},"确定")))},t.contextType=p.default,t.defaultProps={prevLabel:"上一页",nextLabel:"下一页",pagerClassName:"mp-pages",firstLabel:"首页",lastLabel:"末页",showFirst:!0,showLast:!0,pageClassName:"page-item",containerClassName:"mp-pager",showTotal:!0,showJump:!0,pageRange:5,autoHide:!0},t.propTypes={pageCount:c.default.number.isRequired,onPageChange:c.default.func.isRequired},t}(u.Component);t.default=f;},function(e,t,r){var n,a=this&&this.__extends||(n=function(e,t){return (n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);})(e,t)},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(r(0)),s=i(r(1)),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.page,r=e.onClick,n=e.selected,a=e.className,o=e.href;return u.createElement("li",{title:"第"+t+"页",className:s.default(a,{active:n})},u.createElement("a",{href:o,onClick:r},t))},t}(u.Component);t.default=l;},function(e,t,r){e.exports=r(7)();},function(e,t,r){var n=r(8);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r};},function(e,t,r){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";},function(e,t,r){}])}));

});

var index = unwrapExports(dist);

exports.Article = Article;
exports.Breadcrumb = Breadcrumb;
exports.Carousel = Carousel;
exports.CarouselLib = CarouselLib;
exports.Center = Center;
exports.ConfigConsumer = ConfigConsumer;
exports.ConfigContext = ConfigContext;
exports.ConfigProvider = ConfigProvider;
exports.Header = Header;
exports.Like = Like;
exports.List = List$1;
exports.ListView = ListView;
exports.Nav = Nav;
exports.Pager = index;
exports.Picture = Picture;
exports.Skeleton = Skeleton;
//# sourceMappingURL=index.js.map
