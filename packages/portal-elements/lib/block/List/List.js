/** @jsx jsx */
import React, { useState } from 'react';
import { useQueryList, useLocation, useHistory } from 'portal-core';
import { jsx } from '@emotion/core';
import Pager from '@mpfe/pager';
import '@mpfe/pager/dist/index.css';
var Meta = function (_a) {
    var avatar = _a.avatar, title = _a.title, description = _a.description;
    return (jsx("div", { className: "portal-list-item-meta", css: {
            display: 'flex',
            flex: 1,
            alignItems: 'center'
        } },
        jsx("div", { className: "portal-list-item-meta-avatar" }, avatar),
        jsx("div", { className: "portal-list-item-meta-content", css: {
                flex: '1 0',
                marginLeft: 40
            } },
            jsx("h4", { css: {
                    lineHeight: '22px',
                    fontSize: '16px',
                    margin: '4px 0 4px 0',
                    fontWeight: 400,
                    color: '#595757'
                }, className: "portal-list-item-meta-title" }, title),
            jsx("div", { className: "portal-list-item-meta-description", css: {
                    lineHeight: '1.8',
                    textAlign: 'justify',
                    fontsize: '14px',
                    color: '#898989'
                } }, description))));
};
var Item = function (_a) {
    var children = _a.children;
    return (jsx("li", { css: {
            display: 'flex',
            padding: '25px 0',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e8ebed'
        }, className: "portal-list-item" }, children));
};
var List = function (_a) {
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
    return (jsx("div", { className: "portal-list" },
        jsx("ul", { css: {
                listStyle: 'none',
                margin: 0,
                padding: 0
            }, className: "portal-list-items" }, childrenList),
        pagination && (jsx("div", { css: {
                textAlign: 'center',
                marginTop: 70
            }, className: "portal-list-pagination" },
            jsx(Pager, { hrefCreator: function (page) { return "?page=" + page; }, forcePage: page, pageCount: pages, onPageChange: onPageChange })))));
};
Item.Meta = Meta;
List.Item = Item;
export default List;
