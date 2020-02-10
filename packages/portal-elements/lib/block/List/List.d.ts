/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { ListItem } from "portal-data-cms";
import '@mpfe/pager/dist/index.css';
import { PagerProps } from "@mpfe/pager/dist/Pager";
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
declare const List: IList<ListProps>;
export default List;
