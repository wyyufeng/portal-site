/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { FunctionComponent } from 'react';
import Nav from '../Nav/Nav';
import { Link } from '@portal-site/core';
import Center from '../../layout/Center';
export interface IHeaderProps {
    logo: string | React.ReactNode;
    title?: string;
    extra?: React.ReactNode;
}

const Header: FunctionComponent<IHeaderProps> = ({ logo, title = '官网', extra }) => {
    const isSrc = typeof logo === 'string';

    return (
        <header
            className="portal-header"
            css={css`
                background-color: rgba(0, 0, 0, 0.5);
                height: 85px;
                width: 100%;
                position: absolute;
                top: 0;
                z-index: 10;
            `}
        >
            <Center
                css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                `}
            >
                <div className="portal-logo">
                    {isSrc ? (
                        <Link css={{}} to="/" title="首页">
                            <img
                                css={{
                                    verticalAlign: 'middle',
                                    height: 30
                                }}
                                src={logo as string}
                                alt="logo"
                            ></img>
                        </Link>
                    ) : (
                        logo
                    )}
                    <h1
                        css={{
                            fontSize: 0
                        }}
                    >
                        {title}
                    </h1>
                </div>
                <Nav exclude={['Slide']}></Nav>
                <div className="portal-header-extra">{extra}</div>
            </Center>
        </header>
    );
};

export default Header;
