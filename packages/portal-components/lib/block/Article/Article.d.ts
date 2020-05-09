/** @jsx jsx */
import * as React from 'react';
import { FunctionComponent } from 'react';
export interface ArticleProps {
    title?: React.FunctionComponent<{
        title: string;
    }>;
    pubdate?: React.FunctionComponent<{
        pubdate: string;
    }>;
    address?: React.FunctionComponent<{
        address: string;
    }>;
    content?: React.FunctionComponent<{
        content: string;
    }>;
    visitCount?: React.FunctionComponent<{
        visitCount: number;
    }>;
    footer?: React.ReactNode;
    resource: string;
    path?: string;
}
declare const Article: FunctionComponent<ArticleProps>;
export default Article;
