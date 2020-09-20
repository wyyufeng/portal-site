import * as React from 'react';
import { Nav } from '../packages/portal-components/src';
import {
  BrowserRouter,
  Route,
  NavLink
  // @ts-ignore
} from '../packages/portal-components/node_modules/react-router-dom';
export default {
  title: 'Components/Nav',
  parameters: { component: Nav }
};

export const Base = () => (
  <BrowserRouter>
    <Route>
      <Nav
        routes={{
          children: [
            {
              route: 'Home',
              name: '首页',
              url: '/',
              path: '/',
              children: [
                // @ts-ignore
                {
                  route: 'test',
                  name: '测试',
                  url: '/',
                  path: '/Home/test'
                }
              ]
            },
            {
              route: 'News',
              name: '新闻',
              url: '/',
              path: '/News',
              children: [
                // @ts-ignore
                {
                  route: 'news',
                  name: '测试1',
                  url: '/',
                  path: '/News/test1'
                },
                // @ts-ignore
                {
                  route: 'news1',
                  name: '测试2',
                  url: '/',
                  path: '/News/test2'
                }
              ]
            }
          ]
        }}
      ></Nav>
    </Route>
  </BrowserRouter>
);

export const RenderNavLinks = () => (
  <BrowserRouter>
    <Route>
      <Nav
        renderNavLink={(route) => (
          <h1>
            <NavLink to={route.path}>{route.name}</NavLink>
          </h1>
        )}
        renderChildrenNavLink={(child) => (
          <h5>
            <NavLink onClick={() => alert(child.name)} to={child.path}>
              {child.name}
            </NavLink>
          </h5>
        )}
        routes={{
          children: [
            {
              route: 'Home',
              name: '首页',
              url: '/',
              path: '/',
              children: [
                // @ts-ignore
                {
                  route: 'test',
                  name: '测试',
                  url: '/',
                  path: '/Home/test'
                }
              ]
            },
            {
              route: 'News',
              name: '新闻',
              url: '/',
              path: '/News',
              children: [
                // @ts-ignore
                {
                  route: 'news',
                  name: '测试1',
                  url: '/',
                  path: '/News/test1'
                },
                // @ts-ignore
                {
                  route: 'news1',
                  name: '测试2',
                  url: '/',
                  path: '/News/test2'
                }
              ]
            }
          ]
        }}
      ></Nav>
    </Route>
  </BrowserRouter>
);
