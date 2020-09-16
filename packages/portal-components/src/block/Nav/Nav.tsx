import * as React from 'react';
import { css, cx } from 'emotion';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { IRootRouteMap } from '@portal-site/types';

export interface Props {
  /**
   * 排除某些路由，这些路由将不会出现在导航中
   */
  exclude?: Array<string>;
  routes: IRootRouteMap;
  isActive?: Function;
}
export const Nav: FunctionComponent<Props> = ({ exclude = [], routes, isActive }) => {
  return (
    <nav
      className={cx(
        css`
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
        `,
        'portal-nav'
      )}
    >
      <ul
        className={cx(
          css({
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%'
          }),
          'portal-nav-firstmenu'
        )}
      >
        {routes.children
          .filter((item) => !exclude.includes(item.route))
          .map((route) => {
            return (
              <li
                className={cx(
                  css`
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
                  `,
                  'portal-nav-firstmenu-li'
                )}
                key={route.name}
              >
                <NavLink
                  to={route.url !== '/' ? route.url : route.path}
                  isActive={(match, location) => {
                    if (!isActive) {
                      if (!match) {
                        return false;
                      } else {
                        return true;
                      }
                    } else {
                      return isActive(match, location, route.route);
                    }
                  }}
                >
                  {route.name}
                </NavLink>
                <nav
                  className={cx(
                    css`
                      display: none;
                      width: 200px;
                      position: absolute;
                      top: 80px;
                      justify-content: center;
                    `,
                    'portal-nav-second'
                  )}
                >
                  <ul className="portal-nav-secondmenu">
                    {route.children
                      .filter((item) => !exclude.includes(item.route))
                      .map((child) => {
                        return (
                          <li key={child.name}>
                            <NavLink to={child.path}>{child.name}</NavLink>
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
