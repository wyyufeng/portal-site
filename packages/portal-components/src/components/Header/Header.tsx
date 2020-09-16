import { cx, css } from 'emotion';
import { FunctionComponent } from 'react';
import * as React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import { IRootRouteMap } from '@portal-site/types';
import Container from '../../layout/Container';
export interface IHeaderProps {
  logo: string | React.ReactNode;
  title?: string;
  extra?: React.ReactNode;
  routes: IRootRouteMap;
}

const Header: FunctionComponent<IHeaderProps> = ({ logo, title = '官网', extra, routes }) => {
  const isSrc = typeof logo === 'string';
  console.error('该组件即将删除,请勿使用！');
  return (
    <header
      className={cx(
        css`
          background-color: rgba(0, 0, 0, 0.5);
          height: 85px;
          width: 100%;
          position: absolute;
          top: 0;
          z-index: 10;
        `,
        'portal-header'
      )}
    >
      <Container
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        `}
      >
        <div className="portal-logo">
          {isSrc ? (
            <Link to="/" title="首页">
              <img
                className={css({ verticalAlign: 'middle', height: 30 })}
                src={logo as string}
                alt="logo"
              ></img>
            </Link>
          ) : (
            logo
          )}
          <h1
            className={css`
              font-size: 0;
            `}
          >
            {title}
          </h1>
        </div>
        <Nav routes={routes} exclude={['Slide']}></Nav>
        <div className="portal-header-extra">{extra}</div>
      </Container>
    </header>
  );
};

export default Header;
