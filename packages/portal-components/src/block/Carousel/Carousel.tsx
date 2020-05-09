/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FunctionComponent, useRef, useCallback, useEffect } from 'react';
import { useQueryList } from '@portal-site/core';
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
    resource?: string;
}

export const Carousel: FunctionComponent<ICarouselProps> = ({
    delay = 200,
    duration = 6000,
    resource = 'slide'
}) => {
    const wrapperRef = useRef(null);
    const navRef = useRef(null);
    const onSuccess = useCallback(() => {
        timer = setTimeout(() => {
            ins = new CarouselLib({
                container: wrapperRef.current!,
                duration,
                nav: navRef.current!
            }).init();
        }, delay);
    }, [delay, duration]);

    useEffect(() => {
        return () => {
            ins && ins.destroy();
            clearTimeout(timer);
        };
    }, []);
    const { records } = useQueryList(resource, 1, 10, onSuccess);
    const items = records.map((item) => (
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
    ));
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
                    {records.map((i) => (
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
    duration: 6000,
    resource: 'slide'
};
