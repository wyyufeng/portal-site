/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { Meta } from './Meta';
import { css, jsx } from '@emotion/core';
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

export const Item: FunctionComponent<Props> & {
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
            css={css`
                display: flex;
                width: 100%;
                min-height: 0;
                background: 0 0;
                padding: 18px 0;
                border-bottom: 1px solid #f0f0f0;
                &:last-child {
                    border-bottom: none;
                }
            `}
            className="portal-list-item"
        >
            {children}
            {extra && (
                <div
                    css={css`
                        margin-left: 40px;
                    `}
                    className="portal-list-item-extra"
                >
                    {extraNodes}
                </div>
            )}
        </li>
    );
};
Item.Meta = Meta;
