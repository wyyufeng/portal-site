import * as React from 'react';
import { css, cx } from 'emotion';

import { Pager, PagerProps } from '@portal-site/pager';
import '@portal-site/pager/dist/style.css';
import { ListItem } from '@portal-site/types';
import { FunctionComponent } from 'react';
import { Item } from './Item';
import { StyleFix } from '../../types';
export interface ListProps extends StyleFix {
  /**
   * 列表项渲染函数
   */
  renderItem?: (item: ListItem, index: number) => React.ReactNode;
  /**
   * 分页组件props，参考 Pager
   */
  pagination?: PagerProps;
  /**
   * 列表数据
   */
  dataSource: Array<{ title: string; [key: string]: any }>;
}

export const List: FunctionComponent<ListProps> & {
  Item: any;
} = ({
  renderItem = (item) => <Item>{item.title}</Item>,
  pagination,
  dataSource,
  style,
  className
}) => {
  const items = dataSource.map((item: any, index: number) => {
    return renderItem(item, index);
  });

  const childrenList: Array<React.ReactNode> = [];
  React.Children.forEach(items, (child: any, index) => {
    childrenList.push(
      React.cloneElement(child, {
        key: index
      })
    );
  });
  return (
    <div className={cx('portal-list', className)} style={style}>
      <ul
        className={cx(
          css({
            listStyle: 'none',
            margin: 0,
            padding: 0
          }),
          'portal-list-items'
        )}
      >
        {childrenList}
      </ul>
      {pagination && (
        <div
          className={cx(
            css({
              textAlign: 'center',
              marginTop: 70
            }),
            'portal-list-pagination'
          )}
        >
          <Pager {...pagination} />
        </div>
      )}
    </div>
  );
};

List.Item = Item;
