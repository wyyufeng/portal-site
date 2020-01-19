import * as React from "react";

export interface ListProps {}

export default class List extends React.Component<ListProps> {
  render() {
    return (
      <ul>
        <li className="portal-list-item">
          <div className="portal-list-item-meta">
            <div className="portal-list-item-meta-avatar">
              <span className="portal-avatar portal-avatar-circle portal-avatar-image">
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </span>
            </div>
            <div className="portal-list-item-meta-content">
              <h4 className="portal-list-item-meta-title">
                <a href="https://ant.design">Wortmann</a>
              </h4>
              <div className="portal-list-item-meta-description">
                berndt.wortmann@example.com
              </div>
            </div>
          </div>
          <div>Content</div>
        </li>
      </ul>
    );
  }
}
