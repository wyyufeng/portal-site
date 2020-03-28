import Pager from '@mpfe/pager';
import '@mpfe/pager/dist/index.css';
import { useHistory, useLocation, useQueryList } from 'portal-core';
import React, { useState } from 'react';
import { Item } from './Item';
export var List = function (_a) {
    var resource = _a.resource, renderItem = _a.renderItem, _b = _a.pagination, pagination = _b === void 0 ? false : _b, onListChange = _a.onListChange, _c = _a.size, size = _c === void 0 ? 8 : _c;
    var location = useLocation();
    var history = useHistory();
    var params = new URLSearchParams(location.search);
    var currentPage = params.get('page');
    var _d = useState(+currentPage || 1), page = _d[0], setPage = _d[1];
    var _e = useQueryList(resource, page, size), records = _e.records, pages = _e.pages;
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
    React.Children.forEach(items, function (child, index) {
        childrenList.push(React.cloneElement(child, {
            key: index
        }));
    });
    return (React.createElement("div", { className: "portal-list" },
        React.createElement("ul", { css: {
                listStyle: 'none',
                margin: 0,
                padding: 0
            }, className: "portal-list-items" }, childrenList),
        pagination && (React.createElement("div", { css: {
                textAlign: 'center',
                marginTop: 70
            }, className: "portal-list-pagination" },
            React.createElement(Pager, { hrefCreator: function (page) { return "?page=" + page; }, forcePage: page, pageCount: pages, onPageChange: onPageChange })))));
};
List.defaultProps = {
    renderItem: function (item) { return React.createElement(Item, null, item.title); }
};
List.Item = Item;
