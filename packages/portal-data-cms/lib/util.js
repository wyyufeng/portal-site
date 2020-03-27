export var getImgFromHtml = function (content) {
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
export var html2text = function (content, _a) {
    var _b = _a === void 0 ? {
        length: 100,
        wordBreak: false
    } : _a, length = _b.length, wordBreak = _b.wordBreak;
    var _c;
    var s = (_c = content) === null || _c === void 0 ? void 0 : _c.replace(/<[^>]+>|&[^>]+;/g, '').trim();
    if (s === "" || s === undefined)
        return "";
    return s.substr(0, length) + '...';
};
