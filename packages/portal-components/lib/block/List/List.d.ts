import { PagerProps } from '@portal-site/pager';
import '@portal-site/pager/dist/style.css';
import { ListItem } from '@portal-site/types';
import React, { FunctionComponent } from 'react';
export interface ListProps {
    /**
     * 列表id
     */
    resource: string;
    /**
     * 列表项渲染函数
     */
    renderItem: (item: ListItem, index: number) => React.ReactNode;
    /**
     * 分页组件props，参考 Pager
     */
    pagination?: false | PagerProps;
    /**
     * 每页条数
     */
    size?: number;
    /**
     * 当列表数据改变时的回调函数
     */
    onListChange?: () => any;
}
export declare const List: FunctionComponent<ListProps> & {
    Item: any;
};
