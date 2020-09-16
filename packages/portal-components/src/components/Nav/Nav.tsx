import * as React from 'react';
import { css, cx } from 'emotion';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { IRootRouteMap, IRoute } from '@portal-site/types';
import { isFunction } from '../../helper';
import warning from 'warning';
export interface NavProps {
  /**
   * 排除某些路由，这些路由将不会出现在导航中
   */
  exclude?: Array<string>;
  /**
   * 路由表
   */
  routes: IRootRouteMap;
  /**
   * 自定义NavLink渲染函数,默认的渲染函数会渲染最基础的Navlink组件，如果需要其他功能如自定义isActive或添加鼠标事件等可通过此方法实现
   */
  renderNavLink?: (route: IRoute) => JSX.Element;
  /**
   * @deprecated
   */
  isActive?: any;
}
export const Nav: FunctionComponent<NavProps> = ({
  exclude = [],
  routes,
  renderNavLink,
  isActive
}) => {
  console.log(routes);
  warning(!isActive, 'isActive 已被弃用，请使用renderNavLink来自定义渲染!');
  let _renderNavLinks: any = null;
  if (isFunction(renderNavLink)) {
    _renderNavLinks = renderNavLink;
  } else {
    _renderNavLinks = (route: IRoute) => <NavLink to={route.path}>{route.name}</NavLink>;
  }
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
                {_renderNavLinks(route)}
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
