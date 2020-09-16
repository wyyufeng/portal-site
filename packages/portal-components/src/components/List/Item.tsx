import * as React from 'react';
import { css, cx } from 'emotion';

import { FunctionComponent } from 'react';
import { Meta } from './Meta';
export interface ListProps {
  /**
   * 列表的附加内容
   */
  extra?: React.ReactNode;
  /**
   * 是否显示列表项的下边框
   */
  split?: boolean;
}

export const Item: FunctionComponent<ListProps> & {
  Meta: FunctionComponent;
} = ({ children, extra = null }) => {
  let extraNodes: Array<React.ReactNode> = [];
  if (extra) {
    if (!Array.isArray(extra)) {
      extra = [extra];
    }
    React.Children.forEach(extra, (child: any, index) => {
      extraNodes.push(
        React.cloneElement(child, {
          key: index
        })
      );
    });
  }
  return (
    <li
      className={cx(
        css`
          display: flex;
          width: 100%;
          min-height: 0;
          background: 0 0;
          padding: 18px 0;
          border-bottom: 1px solid #f0f0f0;
          &:last-child {
            border-bottom: none;
          }
        `,
        'portal-list-item'
      )}
    >
      {children}
      {extra && (
        <div
          className={cx(
            css`
              margin-left: 40px;
            `,
            'portal-list-item-extra'
          )}
        >
          {extraNodes}
        </div>
      )}
    </li>
  );
};
Item.Meta = Meta;
