export const getImgFromHtml = (content: string = ''): string => {
    if (!content) return '';
    //   匹配图片
    const imgReg = /<img.*?(?:>|\/>)/gi;
    //   匹配src
    const srcReg = /src=['"]?([^'"]*)['"]?/i;
    const arr = content.match(imgReg);
    if (arr === null || arr.length < 0) return '';
    //   获取第一张图片的src
    const src = arr[0].match(srcReg);
    return src ? src[1] : '';
};

export const html2text = (
    content: string,
    {
        length
    }: {
        length: number;
        wordBreak: boolean;
    } = {
        length: 100,
        wordBreak: false
    }
): string => {
    const s = content?.replace(/<[^>]+>|&[^>]+;/g, '').trim();
    if (s === '' || s === undefined) return '';
    return s.substr(0, length) + '...';
};
