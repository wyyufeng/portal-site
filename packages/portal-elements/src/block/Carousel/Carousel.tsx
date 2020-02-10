/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FunctionComponent, useEffect, useState, useCallback } from 'react';
import { useQueryList } from 'portal-core';
import Picture from '../../elements/Picture';

const Carousel: FunctionComponent = function () {
    const { records } = useQueryList('slide', 1, 10);

    useCallback(
        () => {

        },
        [],
    )

    const items = records.map((item, i) => (

        <Picture
            className="portal-carousel-slide"
            base="http://220.191.224.251:80/file/"
            src={item.imgSrc}
            css={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 0;
                `}
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
                <div className="portal-carousel-wrappr">{items}</div>
            </div>
        </div>
    );
};

export default Carousel;
