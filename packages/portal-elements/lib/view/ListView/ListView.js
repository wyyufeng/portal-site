"use strict";
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
var react_1 = __importStar(require("react"));
var Center_1 = __importDefault(require("../../layout/Center"));
var Breadcrumb_1 = __importDefault(require("../../block/Breadcrumb"));
var List_1 = __importDefault(require("../../block/List"));
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListView.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "portal-listview" },
            react_1.default.createElement(Center_1.default, null,
                react_1.default.createElement(Breadcrumb_1.default, { routes: [
                        { name: '首页', path: '/' },
                        { name: '新闻', path: '/news/notice' }
                    ] }),
                react_1.default.createElement(List_1.default, { resource: "News", renderItem: function (item) {
                        return (react_1.default.createElement(List_1.default.Item, null,
                            react_1.default.createElement(List_1.default.Item.Meta, { avatar: react_1.default.createElement("span", { style: {
                                        display: 'inline-block',
                                        width: 8,
                                        height: 8,
                                        border: '1px solid #dcb295',
                                        boxShadow: '0 0 0 1px #fff, 0 0 0 2px #dcb295',
                                        borderRadius: '50%'
                                    } }), title: item.title }),
                            react_1.default.createElement("div", null, item.publishDate)));
                    } }))));
    };
    return ListView;
}(react_1.Component));
exports.default = ListView;
