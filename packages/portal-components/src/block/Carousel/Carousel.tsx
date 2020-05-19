/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FunctionComponent, useRef, useEffect } from 'react';
import Picture from '../../elements/Picture';
import CarouselLib from './lib';
import cls from 'classnames';

let ins: any = null;
let timer: any = null;

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
    dataSource?: any[];
    /**
     * 渲染函数
     */
    renderSlide?: (item: { imgSrc: string; [key: string]: any }, index: number) => React.ReactNode;
}

export const Carousel: FunctionComponent<ICarouselProps> = ({
    delay = 200,
    duration = 6000,
    dataSource = [],
    renderSlide
}) => {
    const wrapperRef = useRef(null);
    const navRef = useRef(null);
    const render = (item: { imgSrc: string }) => (
        <Picture
            key={item.imgSrc}
            className={cls(
                'portal-carousel-slide',
                css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 0;
                `
            )}
            source={item.imgSrc}
        ></Picture>
    );
    const _renderSlide = renderSlide || render;
    useEffect(() => {
        timer = setTimeout(() => {
            ins = new CarouselLib({
                container: wrapperRef.current!,
                duration,
                nav: navRef.current!
            }).init();
        }, delay);
        return () => {
            ins && ins.destroy();
            clearTimeout(timer);
        };
    }, [delay, duration]);
    const items = dataSource.map(_renderSlide);
    return (
        <div
            className="portal-carousel"
            css={css`
                width: 100%;
                height: 100vh;
                position: relative;
                top: 0;
                left: 0;
                overflow: hidden;
            `}
        >
            <div
                className="portal-carousel-container"
                css={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 0;
                `}
            >
                <div ref={wrapperRef} className="portal-carousel-wrappr">
                    {items}
                </div>
                <div
                    ref={navRef}
                    className="portal-carousel-nav"
                    css={css`
                        position: absolute;
                        bottom: 5%;
                        width: 100%;
                        left: 0;
                        text-align: center;
                        & > .portal-carousel-nav-item.active {
                            background-color: red;
                        }
                    `}
                >
                    {dataSource.map((i) => (
                        <i
                            className="portal-carousel-nav-item"
                            css={css`
                                display: inline-block;
                                width: 27px;
                                height: 24px;
                                margin: 0 5px;
                                line-height: 3px;
                                text-align: center;
                                vertical-align: middle;
                                cursor: pointer;
                                background-color: #fff;
                                border-radius: 50%;
                            `}
                            key={i.imgSrc}
                        ></i>
                    ))}
                </div>
            </div>
        </div>
    );
};

Carousel.defaultProps = {
    delay: 200,
    duration: 6000
};
