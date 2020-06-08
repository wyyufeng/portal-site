///  <reference path="object-fit-images.d.ts"/>
import * as React from 'react';
import { css, cx } from 'emotion';

import { FunctionComponent, useRef, useEffect, useContext, useMemo, useState } from 'react';
import objectFitImages from 'object-fit-images';
import fallback_svg from '../assets/no-img.svg';
import { PortalUIContext } from '../config-context';
import { skeleton_animation } from '../styles';
import { StyleFix } from '../types';
import { emptyObj } from '../helper';
export interface Props extends StyleFix {
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
    base?: string;
    /**
     * `Picture`默认使用 `div`包裹,可以通过`wrapper` 修改
     */
    wrapper?: any;
    /**
     * 图像的文本描述
     */
    alt?: string;
}
export const Picture: FunctionComponent<Props> = ({
    source,
    fallback = fallback_svg,
    base = '',
    alt,
    className,
    style = emptyObj,
    wrapper: Wrapper
}) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const config = useContext(PortalUIContext);
    const [loading, setLoading] = useState(true);
    const _base = base || config.assetsPrefix;
    const _fallback = fallback || config.pictureFallback;

    const sourceSets = useMemo(() => {
        const result = Array.isArray(source)
            ? source.filter(Boolean).map((src) => encodeURI(_base + src))
            : [source].filter(Boolean).map((src) => encodeURI(_base + src));
        // 考虑到占位图一般是本地的
        result.push(_fallback);
        return result;
    }, [source, _base, _fallback]);

    useEffect(() => {
        const current = imgRef.current as HTMLImageElement;
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
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sourceSets]);
    return (
        <Wrapper
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
        >
            <img
                className={css({
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                })}
                alt={alt}
                ref={imgRef}
            ></img>
        </Wrapper>
    );
};
Picture.defaultProps = {
    base: '',
    alt: '图片',
    wrapper: 'figure',
    className: ''
};
export default Picture;
