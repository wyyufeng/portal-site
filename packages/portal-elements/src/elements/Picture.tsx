/** @jsx jsx */
import React, {
    FunctionComponent,
    useRef,
    useEffect,
    ImgHTMLAttributes,
    DetailedHTMLProps,
    useState,
    forwardRef
} from 'react';
import { jsx } from '@emotion/core';
import objectFitImages from 'object-fit-images';
export interface PictureProps
    extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
    > {
    src: string;
    webpSupport?: boolean;
    webpFix?: string;
    fallback?: string
}

const Picture: FunctionComponent<PictureProps> = forwardRef(({
    src,
    webpSupport,
    webpFix,
    fallback,
    ...rest
}) => {
    const imgRef = useRef(null);
    let webpSrc = src;
    if (webpSupport) {
        webpSrc = src + webpFix;
    }

    const [fb, useFallback] = useState(Boolean(webpSrc));

    useEffect(() => {
        imgRef.current.onload = () => {
            objectFitImages(imgRef.current, { watchMQ: true });
        };
        imgRef.current.onerror = () => useFallback(true);
    }, [webpSrc]);
    return (
        <img {...rest} src={fb ? fallback : webpSrc} ref={imgRef}></img>
    );
})

export default Picture;
