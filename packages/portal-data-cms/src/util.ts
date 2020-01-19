export const getImgFromHtml = (content: string = ""): string => {
  //   匹配图片
  const imgReg = /<img.*?(?:>|\/>)/gi;
  //   匹配src
  const srcReg = /src=['"]?([^'"]*)['"]?/i;
  const arr = content.match(imgReg);
  if (arr === null || arr.length < 0) return "";
  //   获取第一张图片的src
  const src = arr[0].match(srcReg);
  return src[1];
};
