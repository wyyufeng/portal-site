import * as React from 'react';
import { css, cx } from 'emotion';

import { useRef, useEffect, useContext, useMemo, useState } from 'react';
import objectFitImages from 'object-fit-images';
import fallback_svg from '../assets/no-img.svg';
import { PortalUIContext } from '../config-context';
import { skeleton_animation } from '../styles';
import { StyleFix } from '../types';
export interface PictureProps extends StyleFix {
  /**
   * 图片资源地址,如果传递数组，将显示第一个加载成功的图片，或者显示fallback
   */
  source: string | Array<string>;
  /**
   * 图片加载失败或者资源地址无效时的占位图片
   */
  fallback?: any;
  /**
   * 图片资源的基础地址
   */
  base?: string | undefined;
  /**
   * 图像的文本描述
   */
  alt?: string;
  /**
   * 其他
   */
  [key: string]: any;
}
const testReg = /^http[s]{0,1}:/;
// 检测当前路径是否为完整图片路径
function isCompletePath(src: string): boolean {
  return testReg.test(src);
}

/**
 * Picture组件等同于 img 元素，但提供了默认图、地址过滤、polyfill等功能
 */
export const Picture = React.forwardRef<HTMLImageElement, PictureProps>(
  ({ source, fallback = fallback_svg, base = undefined, alt, className, style, ...rest }, ref) => {
    const defaultRef = useRef<HTMLImageElement>(null);
    const resolvedRef = ref || defaultRef;
    const config = useContext(PortalUIContext);

    const [loading, setLoading] = useState(true);
    const _base = base ?? config.assetsPrefix;
    const _fallback = fallback || config.pictureFallback;

    const sourceSets = useMemo(() => {
      const sourceArr = Array.isArray(source) ? source : [source];
      const result = sourceArr
        .filter(Boolean)
        .map((src) => (isCompletePath(src) ? src : _base + src));
      // 考虑到占位图一般是本地的
      result.push(_fallback);
      return result;
    }, [source, _base, _fallback]);

    useEffect(() => {
      const current = (resolvedRef as React.RefObject<HTMLImageElement>)
        .current as HTMLImageElement;
      current.src = sourceSets.shift() as string;
      function onError() {
        const src = sourceSets.length && sourceSets.shift();
        src && (current.src = src);
        if (!sourceSets.length && !fallback) {
          current.style.display = 'none';
        }
      }

      function onLoad() {
        objectFitImages(current, { watchMQ: true });
        setLoading(false);
      }

      if (current) {
        current.onload = onLoad;
        current.onerror = onError;
      }
      // 将图片src 设置为 "" ,可以取消正在加载的图片
      // 事件要取消
      return () => {
        current.src = '';
        current.onload = null;
        current.onerror = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sourceSets]);
    return (
      <figure
        style={style}
        className={cx(
          css`
            border-radius: 2px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f7f7f7;
            overflow: hidden;
          `,
          loading && skeleton_animation,
          'portal-picture',
          className
        )}
        {...rest}
      >
        <img
          className={css({
            height: '100%',
            maxWidth: '100%',
            objectFit:
              (resolvedRef as React.RefObject<HTMLImageElement>).current?.src === fallback_svg
                ? 'contain'
                : 'cover'
          })}
          alt={alt}
          ref={resolvedRef}
        ></img>
      </figure>
    );
  }
);
Picture.defaultProps = {
  base: undefined,
  alt: '',
  className: ''
};
