import { FunctionComponent, ImgHTMLAttributes, DetailedHTMLProps } from 'react';
import 'lazysizes';
export interface Props extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    /**
     * Some text to display
     */
    source: string | Array<string>;
    fallback?: string;
    base?: string;
    className?: string;
    lazyload?: boolean;
}
export declare const Picture: FunctionComponent<Props>;
export default Picture;
