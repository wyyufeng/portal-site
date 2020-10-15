
/**
 * @description 检测是否有滚动条
 */
function hasScrollbar() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

/**
 * @description 获取滚动条宽度
 * @param recalculate - 是否重新计算
 * @returns 滚动条宽度
 */
export const getScrollbarWidth = function (): number {
  if (!hasScrollbar()) return 0;
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};
