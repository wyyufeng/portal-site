///  <reference path="object-fit-images.d.ts"/>
import React, {
    FunctionComponent,
    useRef,
    useEffect,
    ImgHTMLAttributes,
    DetailedHTMLProps,
    useState,
} from 'react';
import objectFitImages from 'object-fit-images';
import nopic from '../assets/default';

export interface PictureProps
    extends DetailedHTMLProps<
        ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    src: string;
    webpSupport?: boolean;
    webpFix?: string;
    fallback?: string;
}
const Picture: FunctionComponent<PictureProps> = ({
    src,
    webpSupport,
    webpFix = '_.webp',
    fallback = nopic,
    alt = '图片',
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
    return <img alt={alt} {...rest} src={finalSrc} ref={imgRef}></img>;
};

export default Picture;
