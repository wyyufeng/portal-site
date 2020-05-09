/** @jsx jsx */
import React from 'react';
import { FunctionComponent } from 'react';
export interface Props {
    /**
     * id
     */
    resource: string;
    /**
     * 是否可取消
     */
    cancellable?: boolean;
    /**
     * 图标
     */
    icon?: React.ReactNode;
}
export declare const Like: FunctionComponent<Props>;
