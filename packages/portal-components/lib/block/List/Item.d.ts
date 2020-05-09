/** @jsx jsx */
import React, { FunctionComponent } from 'react';
export interface Props {
    /**
     * 列表的附加内容
     */
    extra?: React.ReactNode;
    /**
     * 是否显示列表项的下边框
     */
    split?: boolean;
}
export declare const Item: FunctionComponent<Props> & {
    Meta: FunctionComponent;
};
