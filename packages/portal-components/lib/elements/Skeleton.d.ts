/** @jsx jsx */
import * as React from 'react';
import { StyleFix } from '../types';
export interface SkeletonProps extends StyleFix {
    /**
     * 是否展示展位图，为false时将渲染children
     */
    loading: boolean;
    /**
     * 是否开启动画
     */
    animation: boolean;
    /**
     * 自定义渲染
     */
    renderSkeleton?: () => React.ReactNode;
}
export default class Skeleton extends React.Component<SkeletonProps> {
    static defaultProps: SkeletonProps;
    static Paragraph: typeof Paragraph;
    static Avatar: typeof Avatar;
    static Title: React.FunctionComponent<TitleProps>;
    static Line: React.FunctionComponent<LineProps>;
    static Card: React.FunctionComponent<{}>;
    static List: React.FunctionComponent<{}>;
    renderContent(): {} | null | undefined;
    renderChildren(): {} | null | undefined;
    render(): {} | null | undefined;
}
export declare const Card: React.FunctionComponent;
export declare const List: React.FunctionComponent;
export interface ParagraphProps extends StyleFix {
    /**
     * 文本行数
     */
    rows?: number;
    /**
     * 如果为一个字符串，表示最后一行的宽度，如果为数组则为每行的宽度
     */
    width?: string | string[];
}
export declare const Paragraph: React.FunctionComponent<ParagraphProps>;
export interface AvatarProps extends StyleFix {
    /**
     * 形状
     */
    shape?: 'circle' | 'rect';
}
export declare const Avatar: React.FunctionComponent<AvatarProps>;
export interface TitleProps extends StyleFix {
    /**
     * 宽度
     */
    width?: string;
}
export declare const Title: React.FunctionComponent<TitleProps>;
export interface LineProps extends StyleFix {
    /**
     * 宽度
     */
    height?: string;
    /**
     * 高度
     */
    width?: string;
}
export declare const Line: React.FunctionComponent<LineProps>;
