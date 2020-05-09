/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { FunctionComponent } from 'react';

export interface ICenterProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tag?: string;
    width?: number;
}
const Center: FunctionComponent<ICenterProps> = ({
    tag = 'div',
    width = 1250,
    children,
    ...rest
}) => {
    // const X = tag;
    return (
        <div
            className="portal-center"
            css={css`
                margin: 0 auto;
                width: ${width}px;
            `}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Center;
