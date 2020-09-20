import React, { FunctionComponent } from 'react';
import { css, cx } from 'emotion';
import { ReactComponent as AvatarSvg } from '../../assets/avatar.svg';
import { StyleFix } from '../../types';

export interface AvatarProps extends StyleFix {
  /**
   * 大小（像素）
   */
  size?: number;
  /**
   * 颜色
   */
  color?: string;
}

export const Avatar: FunctionComponent<AvatarProps> = ({
  size = 32,
  color = '#cccccc',
  className,
  style
}) => {
  return (
    <div
      style={style}
      className={cx(
        css`
          display: inline-flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          font-size: ${size}px;
          width: ${size}px;
          height: ${size}px;
          color: ${color};
        `,
        'portal-avatar',
        className
      )}
    >
      <AvatarSvg></AvatarSvg>
    </div>
  );
};
