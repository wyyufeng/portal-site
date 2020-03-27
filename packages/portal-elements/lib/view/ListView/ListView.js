var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import Center from '../../layout/Center';
import Breadcrumb from '../../block/Breadcrumb';
import List from '../../block/List';
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListView.prototype.render = function () {
        return (React.createElement("div", { className: "portal-listview" },
            React.createElement(Center, null,
                React.createElement(Breadcrumb, { routes: [
                        { name: '首页', path: '/' },
                        { name: '新闻', path: '/news/notice' }
                    ] }),
                React.createElement(List, { resource: "News", renderItem: function (item) {
                        return (React.createElement(List.Item, null,
                            React.createElement(List.Item.Meta, { avatar: React.createElement("span", { style: {
                                        display: 'inline-block',
                                        width: 8,
                                        height: 8,
                                        border: '1px solid #dcb295',
                                        boxShadow: '0 0 0 1px #fff, 0 0 0 2px #dcb295',
                                        borderRadius: '50%'
                                    } }), title: item.title }),
                            React.createElement("div", null, item.publishDate)));
                    } }))));
    };
    return ListView;
}(Component));
export default ListView;
