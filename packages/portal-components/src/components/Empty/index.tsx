import { ReactComponent as EmptyIcon } from '../../assets/empty.svg';
import { css, cx } from 'emotion';
import { FunctionComponent } from 'react';
import React from 'react';
import { StyleFix } from '../../types';

export interface EmpryProps extends StyleFix {
  /**
   * 自定义描述内容
   */
  description?: string;
}

export const Empty: FunctionComponent<EmpryProps> = ({
  description = '暂无数据',
  style,
  className
}) => {
  return (
    <div
      style={style}
      className={cx(
        css`
          margin: 32px 0;
          color: rgba(0, 0, 0, 0.25);
          font-size: 14px;
          line-height: 1.5715;
          text-align: center;
        `,
        'portal-empty',
        className
      )}
    >
      <div
        className={css`
          height: 80px;
          margin-bottom: 8px;
          font-size: 80px;
          svg {
            margin: auto;
          }
        `}
      >
        <EmptyIcon></EmptyIcon>
      </div>
      <p
        className={css`
          margin-top: 30px;
        `}
      >
        {description}
      </p>
    </div>
  );
};
