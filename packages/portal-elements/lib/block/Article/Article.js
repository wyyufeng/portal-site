var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { useQueryOne, useDataProvider } from 'portal-core';
import { css } from '@emotion/core';
import Center from '../../layout/Center';
var Article = function (_a) {
    var Title = _a.title, Content = _a.content, Pubdate = _a.pubdate, Address = _a.address, VisitCount = _a.visitCount, Footer = _a.footer, resource = _a.resource, path = _a.path;
    var data = useQueryOne(resource, path).data;
    console.log(useDataProvider('queryOneById'));
    var title = data.title, publishDate = data.publishDate, source = data.source, content = data.content, visitCount = data.visitCount;
    return (React.createElement(Center, { width: 900 },
        React.createElement("article", { css: {
                textAlign: 'justify'
            }, className: "portal-article" },
            React.createElement("header", { className: "portal-article-header", css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                        margin: 20px 0;\n                        line-height: 50px;\n                        color: #595757;\n                        text-align: center;\n                    "], ["\n                        margin: 20px 0;\n                        line-height: 50px;\n                        color: #595757;\n                        text-align: center;\n                    "]))) },
                React.createElement("h1", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                            font-size: 24px;\n                            line-height: 1.5;\n                            margin: 0;\n                            padding: 0;\n                        "], ["\n                            font-size: 24px;\n                            line-height: 1.5;\n                            margin: 0;\n                            padding: 0;\n                        "]))) }, Title ? React.createElement(Title, { title: title }) : title),
                React.createElement("section", { className: "portal-article-info", css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                            & > * {\n                                font-size: 16px;\n                                color: #b7b6b6;\n                                text-align: center;\n                                line-height: 2;\n                                display: inline;\n                                font-style: normal;\n                                margin: 0 10px;\n                            }\n                        "], ["\n                            & > * {\n                                font-size: 16px;\n                                color: #b7b6b6;\n                                text-align: center;\n                                line-height: 2;\n                                display: inline;\n                                font-style: normal;\n                                margin: 0 10px;\n                            }\n                        "]))) },
                    React.createElement("span", { className: "portal-article-info-pubdate" },
                        "\u53D1\u5E03\u65F6\u95F4\uFF1A",
                        Pubdate ? React.createElement(Pubdate, { pubdate: publishDate }) : publishDate),
                    React.createElement("address", { className: "portal-article-info-address", css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""]))) },
                        "\u4FE1\u606F\u6765\u6E90\uFF1A",
                        Address ? React.createElement(Address, { address: source }) : source),
                    React.createElement("span", { className: "portal-article-info-visitcount" },
                        "\u6D4F\u89C8\u6B21\u6570\uFF1A",
                        VisitCount ? (React.createElement(VisitCount, { visitCount: visitCount })) : (visitCount)))),
            React.createElement("section", { className: "portal-article-content", css: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                        margin-top: 30px;\n                        min-height: 300px;\n                        line-height: 1.625;\n                        font-size: 16px;\n                        color: #434343;\n                        & > p {\n                            margin: 15px 0;\n                            text-indent: 2em;\n                        }\n                    "], ["\n                        margin-top: 30px;\n                        min-height: 300px;\n                        line-height: 1.625;\n                        font-size: 16px;\n                        color: #434343;\n                        & > p {\n                            margin: 15px 0;\n                            text-indent: 2em;\n                        }\n                    "]))) }, Content ? (React.createElement(Content, { content: content })) : (React.createElement("article", { dangerouslySetInnerHTML: {
                    __html: content
                } }))),
            React.createElement("footer", null, Footer))));
};
export default Article;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
