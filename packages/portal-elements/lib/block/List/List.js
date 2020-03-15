"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = __importStar(require("react"));
var portal_core_1 = require("portal-core");
var core_1 = require("@emotion/core");
var pager_1 = __importDefault(require("@mpfe/pager"));
require("@mpfe/pager/dist/index.css");
var Meta = function (_a) {
    var avatar = _a.avatar, title = _a.title, description = _a.description;
    return core_1.jsx("div", { className: "portal-list-item-meta", css: {
            display: "flex",
            flex: 1,
            alignItems: 'center'
        } },
        core_1.jsx("div", { className: "portal-list-item-meta-avatar" }, avatar),
        core_1.jsx("div", { className: "portal-list-item-meta-content", css: {
                flex: '1 0',
                marginLeft: 40
            } },
            core_1.jsx("h4", { css: {
                    lineHeight: '22px',
                    fontSize: '16px',
                    margin: '4px 0 4px 0',
                    fontWeight: 400,
                    color: '#595757'
                }, className: "portal-list-item-meta-title" }, title),
            core_1.jsx("div", { className: "portal-list-item-meta-description", css: {
                    lineHeight: '1.8',
                    textAlign: "justify",
                    fontsize: '14px',
                    color: '#898989'
                } }, description)));
};
var Item = function (_a) {
    var children = _a.children;
    return core_1.jsx("li", { css: {
            display: "flex",
            padding: '25px 0',
            justifyContent: "space-between",
            borderBottom: '1px solid #e8ebed'
        }, className: "portal-list-item" }, children);
};
var List = function (_a) {
    var resource = _a.resource, renderItem = _a.renderItem, _b = _a.pagination, pagination = _b === void 0 ? false : _b, onListChange = _a.onListChange, _c = _a.size, size = _c === void 0 ? 8 : _c;
    var location = portal_core_1.useLocation();
    var history = portal_core_1.useHistory();
    var params = new URLSearchParams(location.search);
    var currentPage = params.get('page');
    var _d = react_1.useState(+currentPage || 1), page = _d[0], setPage = _d[1];
    var _e = portal_core_1.useQueryList(resource, page, size), records = _e.records, pages = _e.pages;
    var items = records.map(function (item, index) {
        return renderItem(item, index);
    });
    var onPageChange = function (page) {
        setPage(page);
        onListChange && onListChange();
        params.set('page', page);
        history.push({
            pathname: location.pathname,
            search: '?' + params.toString()
        });
    };
    var childrenList = [];
    react_1.default.Children.forEach(items, function (child, index) {
        childrenList.push(react_1.default.cloneElement(child, {
            key: index
        }));
    });
    return core_1.jsx("div", { className: "portal-list" },
        core_1.jsx("ul", { css: {
                listStyle: "none",
                margin: 0,
                padding: 0
            }, className: "portal-list-items" }, childrenList),
        pagination && core_1.jsx("div", { css: {
                textAlign: "center",
                marginTop: 70
            }, className: "portal-list-pagination" },
            core_1.jsx(pager_1.default, { hrefCreator: function (page) { return "?page=" + page; }, forcePage: page, pageCount: pages, onPageChange: onPageChange })));
};
Item.Meta = Meta;
List.Item = Item;
exports.default = List;
