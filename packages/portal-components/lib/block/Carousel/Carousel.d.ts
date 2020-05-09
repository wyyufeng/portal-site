import { FunctionComponent } from 'react';
export interface ICarouselProps {
    /**
     * 启动延时
     */
    delay?: number;
    /**
     * 动画间隔
     */
    duration?: number;
    /**
     * 资源名
     */
    resource?: string;
}
export declare const Carousel: FunctionComponent<ICarouselProps>;
