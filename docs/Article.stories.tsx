import {
    Meta,
    Story,
    Props,
    Preview,
    Source,
    Primary,
    Title,
    Stories
} from '@storybook/addon-docs/blocks';
import { Article as ArticleComp, List } from '../packages/portal-components/src';
import { useArticleController } from '../packages/portal-core';
import App from './App';
import React from 'react';

function Article() {
    const { data } = useArticleController({ resource: '1' });
    return <ArticleComp {...data}></ArticleComp>;
}

export default {
    title: 'Article',
    component: ArticleComp,
    info: { inline: true }
};
export const Default = () => (
    <App>
        <Article></Article>
    </App>
);
