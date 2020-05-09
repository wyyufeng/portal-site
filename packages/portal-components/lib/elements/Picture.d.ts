/// <reference path="../src/elements/object-fit-images.d.ts" />
import { FunctionComponent } from 'react';
import { StyleFix } from '../types';
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
export declare const Picture: FunctionComponent<Props>;
export default Picture;
