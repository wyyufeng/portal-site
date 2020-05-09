/** @jsx jsx */
import React, { FunctionComponent } from 'react';
export interface Props {
    /**
     * 列表项的头部图片
     */
    avatar?: React.ReactNode;
    /**
     * 列表项内容标题
     */
    title?: React.ReactNode;
    /**
     * 列表项内容描述
     */
    description?: React.ReactNode;
    /**
     * 列表项二级标题
     */
    secondary?: React.ReactNode;
    /**
     * 列表项内容是否居中
     */
    center?: boolean;
    /**
     * 列表项操作
     */
    actions?: React.ReactNode;
}
export declare const Meta: FunctionComponent<Props>;
