"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
exports.listMapper = function (source) {
    return source.map(function (item) {
        var _a, _b, _c;
        return {
            id: item.archivesId,
            channelNo: item.channelNo,
            channelName: item.channelName,
            title: item.title,
            subTitle: item.subTitle,
            publishDate: item.publishDate.split(" ")[0],
            parentChannelNo: item.parentChannelNo,
            imgSrc: encodeURI(item.thumbImg ? item.thumbImg : util_1.getImgFromHtml(item.content)),
            appImgSrc: encodeURI((_a = item.thumbAppImg, (_a !== null && _a !== void 0 ? _a : ""))),
            abstract: item.description,
            content: item.content,
            source: (_b = item.source, (_b !== null && _b !== void 0 ? _b : "")),
            linkUrl: (_c = item.linkUrl, (_c !== null && _c !== void 0 ? _c : "")),
            isShowTitle: item.isShowTitle,
            visitCount: item.visitCount
        };
    });
};
function listOneMapper(source) {
    var _a;
    return {
        id: source.archivesId,
        channelNo: source.channelNo,
        channelName: source.channelName,
        title: source.title,
        subTitle: source.subTitle,
        publishDate: source.publishDate.split(" ")[0],
        parentChannelNo: source.parentChannelNo,
        imgSrc: encodeURI(source.thumbImg ? source.thumbImg : util_1.getImgFromHtml(source.content)),
        appImgSrc: encodeURI((_a = source.thumbAppImg, (_a !== null && _a !== void 0 ? _a : ""))),
        abstract: source.description,
        content: source.content,
        source: source.source || "",
        linkUrl: source.linkUrl || "",
        isShowTitle: source.isShowTitle,
        visitCount: source.visitCount
    };
}
exports.listOneMapper = listOneMapper;
