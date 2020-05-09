import { Pager, PagerProps } from '@portal-site/pager';
import '@portal-site/pager/dist/style.css';
import { useHistory, useLocation, useQueryList } from '@portal-site/core';
import { ListItem } from '@portal-site/types';
import React, { FunctionComponent, useState } from 'react';
import { Item } from './Item';
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

export const List: FunctionComponent<ListProps> & {
    Item: any;
} = ({ resource, renderItem, pagination = false, onListChange, size = 8 }) => {
    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    const currentPage = params.get('page') || 0;

    const [page, setPage] = useState(+currentPage || 1);
    const { records = [], pages } = useQueryList(resource, page, size);
    const items = records.map((item: any, index: number) => {
        return renderItem(item, index);
    });
    const onPageChange = (page: number) => {
        setPage(page);
        onListChange && onListChange();
        params.set('page', page + '');
        history.push({
            pathname: location.pathname,
            search: '?' + params.toString()
        });
    };
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
