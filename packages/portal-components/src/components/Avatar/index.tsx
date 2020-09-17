import React, { FunctionComponent } from 'react';
import { css } from 'emotion';
import { ReactComponent as AvatarSvg } from '../../assets/avatar.svg';
import { StyleFix } from '../../types';

export interface AvatarProps extends StyleFix {
  /**
   * 大小
   */
  size?: string;
  /**
   * 颜色
   */
  color?: string;
}

export const Avatar: FunctionComponent<AvatarProps> = ({ size = 60, color = '#fff' }) => {
  console.log(AvatarSvg);
  return (
    <div
      className={css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        font-size: ${size};
        width: ${size}px;
        height: ${size}px;
        color: ${color};
      `}
    >
      <AvatarSvg></AvatarSvg>
    </div>
  );
};
