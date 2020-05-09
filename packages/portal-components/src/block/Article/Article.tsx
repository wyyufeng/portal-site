/** @jsx jsx */
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useQueryOne } from '@portal-site/core';
import { css, jsx } from '@emotion/core';
import Center from '../../layout/Center';

export interface ArticleProps {
    title?: React.FunctionComponent<{ title: string }>;
    pubdate?: React.FunctionComponent<{ pubdate: string }>;
    address?: React.FunctionComponent<{ address: string }>;
    content?: React.FunctionComponent<{ content: string }>;
    visitCount?: React.FunctionComponent<{ visitCount: number }>;
    footer?: React.ReactNode;
    resource: string;
    path?: string;
}

const Article: FunctionComponent<ArticleProps> = ({
    title: Title,
    content: Content,
    pubdate: Pubdate,
    address: Address,
    visitCount: VisitCount,
    footer: Footer,
    resource,
    path
}) => {
    const { data } = useQueryOne(resource, path);
    const { title, publishDate, source, content, visitCount } = data;
    return (
        <Center width={900}>
            <article
                css={{
                    textAlign: 'justify'
                }}
                className="portal-article"
            >
                <header
                    className="portal-article-header"
                    css={css`
                        margin: 20px 0;
                        line-height: 50px;
                        color: #595757;
                        text-align: center;
                    `}
                >
                    <h1
                        css={css`
                            font-size: 24px;
                            line-height: 1.5;
                            margin: 0;
                            padding: 0;
                        `}
                    >
                        {Title ? <Title title={title}></Title> : title}
                    </h1>
                    <section
                        className="portal-article-info"
                        css={css`
                            & > * {
                                font-size: 16px;
                                color: #b7b6b6;
                                text-align: center;
                                line-height: 2;
                                display: inline;
                                font-style: normal;
                                margin: 0 10px;
                            }
                        `}
                    >
                        <span className="portal-article-info-pubdate">
                            发布时间：
                            {Pubdate ? <Pubdate pubdate={publishDate}></Pubdate> : publishDate}
                        </span>
                        <address className="portal-article-info-address" css={css``}>
                            信息来源：
                            {Address ? <Address address={source}></Address> : source}
                        </address>
                        <span className="portal-article-info-visitcount">
                            浏览次数：
                            {VisitCount ? (
                                <VisitCount visitCount={visitCount}></VisitCount>
                            ) : (
                                visitCount
                            )}
                        </span>
                    </section>
                </header>
                <section
                    className="portal-article-content"
                    css={css`
                        margin-top: 30px;
                        min-height: 300px;
                        line-height: 1.625;
                        font-size: 16px;
                        color: #434343;
                        & > p {
                            margin: 15px 0;
                            text-indent: 2em;
                        }
                    `}
                >
                    {Content ? (
                        <Content content={content}></Content>
                    ) : (
                        <article
                            dangerouslySetInnerHTML={{
                                __html: content
                            }}
                        ></article>
                    )}
                </section>
                <footer>{Footer}</footer>
            </article>
        </Center>
    );
};

export default Article;
