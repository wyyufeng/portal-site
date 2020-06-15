import { Article as ArticleComp, Like, Skeleton } from '../packages/portal-components/src';
import { useQueryOne, useQueryList } from '../packages/portal-core/src';
import App from './App';
import React from 'react';
const obj = { resource: '1' };
// {}!={}
function Article() {
    const { data, loading } = useQueryOne(obj);
    const { records } = useQueryList({ resource: '1', pagination: { page: 1, size: 2 } });
    console.log(data, records);
    // console.log(data.content);
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
    const { data } = useQueryOne(obj);
    console.log(data);
    return <ArticleComp footer={123} {...data}></ArticleComp>;
}
export const b = () => (
    <App>
        <Skeleton loading renderSkeleton={() => <Skeleton.Card></Skeleton.Card>}></Skeleton>
    </App>
);
