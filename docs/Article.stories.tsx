import { Article as ArticleComp, Like } from '../packages/portal-components/src';
import { useArticleController } from '../packages/portal-core/src';
import App from './App';
import React from 'react';

function Article() {
    const { data } = useArticleController({ resource: '1' });
    return <ArticleComp {...data}></ArticleComp>;
}

export default {
    title: 'Article',
    parameters: { component: ArticleComp }
};
export const a = () => (
    <App>
        <Article></Article>
    </App>
);
function CustomArticle() {
    const { data } = useArticleController({ resource: '1' });
    console.log(data);
    return <ArticleComp footer={123} {...data}></ArticleComp>;
}
export const b = () => (
    <App>
        <CustomArticle></CustomArticle>
    </App>
);
