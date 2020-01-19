"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImgFromHtml = function (content) {
    if (content === void 0) { content = ""; }
    //   匹配图片
    var imgReg = /<img.*?(?:>|\/>)/gi;
    //   匹配src
    var srcReg = /src=['"]?([^'"]*)['"]?/i;
    var arr = content.match(imgReg);
    if (arr === null || arr.length < 0)
        return "";
    //   获取第一张图片的src
    var src = arr[0].match(srcReg);
    return src[1];
};
