/** @jsx jsx */
import React, { FunctionComponent, useState } from 'react';
import { useQueryList, useLocation, useHistory } from 'portal-core';
import { ListItem } from 'portal-data-cms';
import { jsx } from '@emotion/core';
import Pager from '@mpfe/pager';
import '@mpfe/pager/dist/index.css';
import { PagerProps } from '@mpfe/pager/dist/Pager';
export interface ListProps {
    resource: string;
    size?: number;
    renderItem?: (item: ListItem, index: number) => React.ReactNode;
    pagination?: false | PagerProps;
    onListChange?: () => any;
}
export interface IList<T> extends FunctionComponent<T> {
    Item: any;
}

export interface IItem<T> extends FunctionComponent<T> {
    Meta: any;
}

export interface MetaProps {
    avatar?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
}

const Meta: FunctionComponent<MetaProps> = ({ avatar, title, description }) => {
    return (
        <div
            className="portal-list-item-meta"
            css={{
                display: 'flex',
                flex: 1,
                alignItems: 'center'
            }}
        >
            <div className="portal-list-item-meta-avatar">{avatar}</div>
            <div
                className="portal-list-item-meta-content"
                css={{
                    flex: '1 0',
                    marginLeft: 40
                }}
            >
                <h4
                    css={{
                        lineHeight: '22px',
                        fontSize: '16px',
                        margin: '4px 0 4px 0',
                        fontWeight: 400,
                        color: '#595757'
                    }}
                    className="portal-list-item-meta-title"
                >
                    {title}
                </h4>
                <div
                    className="portal-list-item-meta-description"
                    css={{
                        lineHeight: '1.8',
                        textAlign: 'justify',
                        fontsize: '14px',
                        color: '#898989'
                    }}
                >
                    {description}
                </div>
            </div>
        </div>
    );
};
const Item: IItem<{}> = ({ children }) => {
    return (
        <li
            css={{
                display: 'flex',
                padding: '25px 0',
                justifyContent: 'space-between',
                borderBottom: '1px solid #e8ebed'
            }}
            className="portal-list-item"
        >
            {children}
        </li>
    );
};

const List: IList<ListProps> = ({
    resource,
    renderItem,
    pagination = false,
    onListChange,
    size = 8
}) => {
    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    const currentPage = params.get('page');

    const [page, setPage] = useState(+currentPage || 1);
    const { records, pages } = useQueryList(resource, page, size);
    const items = records.map((item, index) => {
        return renderItem(item, index);
    });
    const onPageChange = (page) => {
        setPage(page);
        onListChange && onListChange();
        params.set('page', page);
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

Item.Meta = Meta;
List.Item = Item;

export default List;
