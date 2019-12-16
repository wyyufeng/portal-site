/// <reference path="../../src/elements/object-fit-images.d.ts" />
import { FunctionComponent, ImgHTMLAttributes, DetailedHTMLProps } from 'react';
export interface PictureProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src: string;
    webpSupport?: boolean;
    webpFix?: string;
    fallback?: string;
}
declare const Picture: FunctionComponent<PictureProps>;
export default Picture;
