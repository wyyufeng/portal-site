import * as React from 'react';
import cls from 'classnames';

export interface PageProps {
  page: number;
  onClick: React.MouseEventHandler;
  selected: boolean;
  className: string;
  href: string | undefined;
}
export default class Page extends React.Component<PageProps> {
  render() {
    const { page, onClick, selected, className, href } = this.props;

    return (
      <li
        title={`第${page}页`}
        className={cls(className, { active: selected })}
      >
        <a href={href} onClick={onClick}>
          {page}
        </a>
      </li>
    );
  }
}
