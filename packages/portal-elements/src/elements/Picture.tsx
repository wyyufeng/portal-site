/** @jsx jsx */
import { jsx } from '@emotion/core'
///  <reference path="object-fit-images.d.ts"/>
import {
    FunctionComponent,
    useRef,
    useEffect,
    ImgHTMLAttributes,
    DetailedHTMLProps,
    useState,
} from 'react';
import objectFitImages from 'object-fit-images';
import nopic from '../assets/default';
import cx from 'classnames';
export interface PictureProps
    extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
    > {
    src: string;
    webpSupport?: boolean;
    webpFix?: string;
    fallback?: string;
    base?: string
    className?: string
}
const Picture: FunctionComponent<PictureProps> = ({
    src,
    webpSupport,
    webpFix = '_.webp',
    fallback = nopic,
    alt = '图片',
    base = '',
    className,
    ...rest
}) => {
    const imgRef = useRef<HTMLImageElement>(null);
    let webpSrc = src || fallback;
    if (webpSupport && src) {
        webpSrc = src + webpFix;
    }

    const [fb, setFb] = useState(!Boolean(webpSrc));
    const [webpExist, setWebpExist] = useState(webpSupport);
    const memoref = useRef(webpExist);
    const finalSrc = webpExist ? webpSrc : fb ? fallback : src;

    useEffect(() => {
        function onError() {
            if (memoref.current) {
                memoref.current = false;
                return setWebpExist(false);
            }
            setFb(true);
        }

        function onLoad() {
            objectFitImages(imgRef.current, { watchMQ: true });
        }

        if (imgRef.current && webpSrc) {
            imgRef.current.onload = onLoad;
            imgRef.current.onerror = onError;
        }
    }, [webpSrc]);
    return <div className={cx("portal-picture", {
        [className]: !!className
    })} {...rest}
        css={{
            width: 260,
            height: 160,
            textAlign: "center",
            display: "flex"

        }}
    >
        <img
            css={{
                width: "100%",
                maxHeight: '100%',
                objectFit: "cover"

            }}
            alt={alt} src={base + finalSrc} ref={imgRef}></img>
    </div>
};

export default Picture;
