import * as React from 'react';
import { css, cx } from 'emotion';
import { FunctionComponent } from 'react';
import { StyleFix } from '../types';

export interface IContainerProps extends StyleFix {
  width?: string;
}
const Container: FunctionComponent<IContainerProps> = ({
  width = '1250px',
  className,
  children,
  style,
  ...rest
}) => {
  return (
    <div
      style={style}
      className={cx(
        css`
          flex-grow: 1;
          margin: 0 auto;
          position: relative;
          width: ${width};
        `,
        'portal-container',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
