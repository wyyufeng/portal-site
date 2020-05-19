/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FunctionComponent } from 'react';

export interface IContainerProps {
    width?: string;
}
const Container: FunctionComponent<IContainerProps> = ({ width = '1250px', children, ...rest }) => {
    return (
        <div
            className="portal-container"
            css={css`
                flex-grow: 1;
                margin: 0 auto;
                position: relative;
                width: ${width};
            `}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Container;
