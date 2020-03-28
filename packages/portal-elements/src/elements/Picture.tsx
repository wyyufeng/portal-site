import * as React from 'react';
///  <reference path="object-fit-images.d.ts"/>
import { FunctionComponent, useRef, useEffect, useContext, useMemo, useState } from 'react';
import 'lazysizes';
import objectFitImages from 'object-fit-images';
import nopic from '../assets/default';
import { ConfigContext } from '../config-provider';
import cx from 'classnames';
import { skeleton_animation } from '../styles';
export interface Props {
    /**
     * 图片资源地址,如果传递数组，将显示第一个加载成功的图片，或者显示fallback
     */
    source: string | Array<string>;
    /**
     * 图片加载失败或者资源地址无效时的占位图片
     */
    fallback?: string;
    /**
     * 图片资源的基础地址
     */
    base?: string;
    /**
     * `Picture`默认使用 `div`包裹,可以通过这个`prop` 修改
     */
    wrapper?: any;
    /**
     * 图像的文本描述
     */
    alt?: string;
    /**
     * css 类名
     */
    className?: string;
}
export const Picture: FunctionComponent<Props> = ({
    source,
    fallback = nopic,
    base,
    alt,
    className,
    wrapper: Wrapper,
    ...rest
}) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const config = useContext(ConfigContext);
    const [loading, setLoading] = useState(true);
    const _base = base || config.assetsBase;
    const _fallback = fallback || config.pictureFallback;

    const srcs = useMemo(() => {
        const result = Array.isArray(source)
            ? source.filter(Boolean).map((i) => encodeURI(_base + source))
            : [source].filter(Boolean).map((i) => encodeURI(_base + source));
        // 考虑到占位图一般是本地图片
        result.push(_fallback);
        return result;
    }, [source, _base, _fallback]);

    useEffect(() => {
        const current = imgRef.current;
        current.src = srcs.shift();
        function onError() {
            const src = srcs.length && srcs.shift();
            src && (current.src = src);
            if (!srcs.length && !fallback) {
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
        return () => (current.src = '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [srcs]);
    return (
        <Wrapper
            className={cx('portal-picture', {
                [className]: !!className
            })}
            {...rest}
            css={[
                {
                    textAlign: 'center',
                    display: 'flex',
                    borderRadius: '2px'
                },
                loading && skeleton_animation
            ]}
        >
            <img
                css={{
                    width: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    margin: 0,
                    padding: 0,
                    borderRadius: 'inherit'
                }}
                alt={alt}
                ref={imgRef}
            ></img>
        </Wrapper>
    );
};
Picture.defaultProps = {
    base: '',
    alt: '图片',
    wrapper: 'div',
    className: ''
};
export default Picture;
