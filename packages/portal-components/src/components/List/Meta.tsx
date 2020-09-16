import * as React from 'react';
import { css, cx } from 'emotion';

import { FunctionComponent } from 'react';

export interface Props {
  /**
   * 列表项的头部图片
   */
  avatar?: React.ReactNode;
  /**
   * 列表项内容标题
   */
  title?: React.ReactNode;
  /**
   * 列表项内容描述
   */
  description?: React.ReactNode;
  /**
   * 列表项二级标题
   */
  secondary?: React.ReactNode;
  /**
   * 列表项内容是否居中
   */
  center?: boolean;
  /**
   * 列表项操作
   */
  actions?: React.ReactNode;
}
export const Meta: FunctionComponent<Props> = ({
  avatar,
  title,
  description,
  secondary,
  center = false,
  actions
}) => {
  return (
    <div
      className={cx(
        css({
          display: 'flex',
          flex: 1
        }),
        center &&
          css`
            align-items: center;
          `,
        'portal-list-item-meta'
      )}
    >
      <div
        className={cx(
          css`
            position: relative;
            flex: 0 0 auto;
            float: none;
            margin: 0;
            padding: 0;
          `,
          'portal-list-item-meta-avatar'
        )}
      >
        {avatar}
      </div>
      <div
        className={cx(
          css`
            flex: 1 1 auto;
            background: 0 0;
            margin: 0;
            padding: 0;
            box-shadow: none;
            font-size: 1em;
            border: none;
            min-width: 0;
            width: auto;
            align-self: top;
            padding-left: 1.5em;
          `,
          'portal-list-item-meta-main'
        )}
      >
        <div
          className={cx(
            css`
              display: inline-block;
              margin: 6px 0 10px;
            `,
            'portal-list-item-meta-header'
          )}
        >
          <h4
            className={css`
              font-size: 16px;
              color: #595757;
              font-weight: normal;
              margin: -4px 0 0 1px;
            `}
          >
            {title}
          </h4>
          <span
            className={css`
              margin: 7px 0 7px;
              font-size: 14px;
              line-height: 1em;
              color: rgba(0, 0, 0, 0.6);
            `}
          >
            {secondary}
          </span>
        </div>
        <div
          className={cx(
            css({
              lineHeight: '1.8',
              textAlign: 'justify',
              fontSize: '14px',
              color: '#898989'
            }),
            'portal-list-item-meta-description'
          )}
        >
          {description}
        </div>
        {actions && (
          <div
            className={cx(
              css`
                display: flex;

                position: relative;
                background: 0 0;
                margin: 1rem 0 0;
                width: 100%;
                padding: 0 0 0;
                top: 0;
                left: 0;
                box-shadow: none;
                border-top: none;
                justify-content: flex-end;
              `,
              'portal-list-item-meta-action'
            )}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};
