/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { useRoutesMap, NavLink } from '@portal-site/core';
export interface Props {
    /**
     * 排除某些路由，这些路由将不会出现在导航中
     */
    exclude?: Array<string>;
}

export const Nav: FunctionComponent<Props> = ({ exclude = [] }) => {
    const routes = useRoutesMap();
    return (
        <nav
            className="portal-nav"
            css={css`
                height: 88px;
                width: 800px;
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                a {
                    text-decoration: none;
                    color: #000;
                }
            `}
        >
            <ul
                className="portal-nav-firstmenu"
                css={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '100%'
                }}
            >
                {routes.children
                    .filter((item) => !exclude.includes(item.route))
                    .map((route) => {
                        return (
                            <li
                                css={css`
                                    display: flex;
                                    justify-content: center;
                                    position: relative;
                                    flex-wrap: wrap;
                                    height: 80px;
                                    align-items: center;
                                    & > a {
                                        width: 100%;
                                        text-align: center;
                                    }
                                    &:hover {
                                        nav {
                                            display: flex;
                                        }
                                    }
                                `}
                                className="portal-nav-firstmenu-li"
                                key={route.name}
                            >
                                <NavLink to={route.path}>{route.name}</NavLink>
                                <nav
                                    className="portal-nav-second"
                                    css={css`
                                        display: none;
                                        width: 200px;
                                        position: absolute;
                                        top: 80px;
                                        justify-content: center;
                                    `}
                                >
                                    <ul className="portal-nav-secondmenu">
                                        {route.children
                                            .filter((item) => !exclude.includes(item.route))
                                            .map((child) => {
                                                return (
                                                    <li key={child.name}>
                                                        <NavLink to={child.path}>
                                                            {child.name}
                                                        </NavLink>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </nav>
                            </li>
                        );
                    })}
            </ul>
        </nav>
    );
};

Nav.defaultProps = {
    exclude: []
};

export default Nav;
