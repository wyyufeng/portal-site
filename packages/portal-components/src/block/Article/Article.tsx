/** @jsx jsx */
import * as React from 'react';
import { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';
import Container from '../../layout/Container';
export interface ArticleProps {
    title?: React.FunctionComponent;
    pubdate?: React.FunctionComponent;
    address?: React.FunctionComponent;
    content?: React.FunctionComponent;
    visitCount?: React.FunctionComponent;
    footer?: React.ReactNode;
    // resource: string;
    // path?: string;
}
const isString = (test: any): boolean => Object.prototype.toString.call(test) === '[object String]';
const Article: FunctionComponent<ArticleProps> = ({
    title,
    content = '',
    pubdate,
    address,
    visitCount,
    footer
    // resource,
    // path
}) => {
    // const { data } = useQueryOne(resource, path);
    // const { title, publishDate, source, content, visitCount } = data;
    return (
        <Container>
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
                        {title}
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
                            {pubdate}
                        </span>
                        <address className="portal-article-info-address" css={css``}>
                            信息来源：
                            {address}
                        </address>
                        <span className="portal-article-info-visitcount">
                            浏览次数：
                            {visitCount}
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
                    {isString(content) ? (
                        <article
                            dangerouslySetInnerHTML={{
                                __html: content as string
                            }}
                        ></article>
                    ) : (
                        content
                    )}
                </section>
                <footer>{footer}</footer>
            </article>
        </Container>
    );
};

export default Article;
