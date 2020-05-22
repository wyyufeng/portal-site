import * as React from 'react';
import { FunctionComponent } from 'react';
import { css, cx } from 'emotion';
import Container from '../../layout/Container';
export interface ArticleProps {
    title?: React.ReactNode;
    publishDate?: React.ReactNode;
    source?: React.ReactNode;
    content?: React.ReactNode;
    visitCount?: React.ReactNode;
    footer?: React.ReactNode;
    // resource: string;
    // path?: string;
}
const isString = (test: any): boolean => Object.prototype.toString.call(test) === '[object String]';
const Article: FunctionComponent<ArticleProps> = ({
    title,
    content = '',
    publishDate,
    source,
    visitCount,
    footer,
    a
}) => {
    console.log(a);
    return (
        <Container>
            <article
                className={cx(
                    css({
                        textAlign: 'justify'
                    }),
                    'portal-article'
                )}
            >
                <header
                    className={cx(
                        css`
                            margin: 20px 0;
                            line-height: 50px;
                            color: #595757;
                            text-align: center;
                        `,
                        'portal-article-header'
                    )}
                >
                    <h1
                        className={css`
                            font-size: 24px;
                            line-height: 1.5;
                            margin: 0;
                            padding: 0;
                        `}
                    >
                        {title}
                    </h1>
                    <section
                        className={cx(
                            css`
                                & > * {
                                    font-size: 16px;
                                    color: #b7b6b6;
                                    text-align: center;
                                    line-height: 2;
                                    display: inline;
                                    font-style: normal;
                                    margin: 0 10px;
                                }
                            `,
                            'portal-article-info'
                        )}
                    >
                        <span className="portal-article-info-pubdate">
                            发布时间：
                            {publishDate}
                        </span>
                        <address className="portal-article-info-address">
                            信息来源：
                            {source}
                        </address>
                        <span className="portal-article-info-visitcount">
                            浏览次数：
                            {visitCount}
                        </span>
                    </section>
                </header>
                <section
                    className={cx(
                        css`
                            margin-top: 30px;
                            min-height: 300px;
                            line-height: 1.625;
                            font-size: 16px;
                            color: #434343;
                            & > p {
                                margin: 15px 0;
                                text-indent: 2em;
                            }
                        `,
                        'portal-article-content'
                    )}
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
                {footer && <footer>{footer}</footer>}
            </article>
        </Container>
    );
};

export default Article;
