import * as React from 'react';
import { css, cx } from 'emotion';
import { FunctionComponent } from 'react';

export interface IContainerProps {
    width?: string;
    className?: string;
}
const Container: FunctionComponent<IContainerProps> = ({ width = '1250px', children, ...rest }) => {
    return (
        <div
            className={cx(
                css`
                    flex-grow: 1;
                    margin: 0 auto;
                    position: relative;
                    width: ${width};
                `,
                'portal-container'
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Container;
