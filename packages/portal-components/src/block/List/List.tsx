import { Pager, PagerProps } from '@portal-site/pager';
import '@portal-site/pager/dist/style.css';
import { ListItem } from '@portal-site/types';
import React, { FunctionComponent } from 'react';
import { Item } from './Item';
export interface ListProps {
    /**
     * 列表项渲染函数
     */
    renderItem: (item: ListItem, index: number) => React.ReactNode;
    /**
     * 分页组件props，参考 Pager
     */
    pagination?: false | PagerProps;
    /**
     * 列表数据
     */
    dataSource: any[];
    /**
     * 当前页
     */
    page: number;
    /**
     * 总页数
     */
    pages: number;
    /**
     * 页面改变时的回调函数
     */
    onPageChange: (page: number) => any;
}

export const List: FunctionComponent<ListProps> & {
    Item: any;
} = ({ renderItem, pagination = false, dataSource, page, pages, onPageChange }) => {
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
        <div className="portal-list">
            <ul
                css={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}
                className="portal-list-items"
            >
                {childrenList}
            </ul>
            {pagination && (
                <div
                    css={{
                        textAlign: 'center',
                        marginTop: 70
                    }}
                    className="portal-list-pagination"
                >
                    <Pager
                        hrefCreator={(page) => `?page=${page}`}
                        forcePage={page}
                        pageCount={pages}
                        onPageChange={onPageChange}
                    />
                </div>
            )}
        </div>
    );
};

List.defaultProps = {
    renderItem: (item) => <Item>{item.title}</Item>
};

List.Item = Item;
