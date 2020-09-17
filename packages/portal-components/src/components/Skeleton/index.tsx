import * as React from 'react';
import { css } from 'emotion';
import { skeleton_animation } from '../../styles';
import { cx } from 'emotion';
import { StyleFix } from '../../types';
import { emptyObj } from '../../helper';

export interface SkeletonProps extends StyleFix {
  /**
   * 是否展示展位图，为false时将渲染children
   */
  loading: boolean;
  /**
   * 是否开启动画
   */
  animation: boolean;
  /**
   * 自定义渲染,已被废弃，请使用render
   */
  renderSkeleton?: () => React.ReactNode;
  /**
   * 自定义渲染
   */
  render?: () => React.ReactNode;
}

export default class Skeleton extends React.Component<SkeletonProps> {
  static defaultProps: SkeletonProps = {
    loading: true,
    animation: true
  };
  static Paragraph: typeof Paragraph;
  static Avatar: typeof Avatar;
  static Title: React.FunctionComponent<TitleProps>;
  static Line: React.FunctionComponent<LineProps>;
  static Card: React.FunctionComponent<{}>;
  static List: React.FunctionComponent<{}>;
  renderContent() {
    const { renderSkeleton, render } = this.props;
    if (typeof render === 'function') {
      return render();
    }
    if (typeof renderSkeleton === 'function') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('renderSkeleton 已被render替换，请使用render');
      }
      return renderSkeleton();
    }

    return <Paragraph></Paragraph>;
  }
  renderChildren() {
    const { loading, children, animation, className, style = emptyObj } = this.props;
    if (loading) {
      return (
        <div
          className={cx(
            css`
              display: inline-block;
              margin: 1.5rem 0;
              width: 100%;
              &.portal-skeleton-animation {
                .portal-skeleton-element {
                  ${skeleton_animation}
                }
              }
            `,
            'portal-skeleton',
            className,
            {
              'portal-skeleton-animation': animation
            }
          )}
          style={style}
        >
          {this.renderContent()}
        </div>
      );
    }
    return children;
  }
  render() {
    return this.renderChildren();
  }
}

export const Card: React.FunctionComponent = () => {
  return (
    <div
      className={cx(
        'portal-skeleton-card',
        css`
          width: 268px;
          height: 320px;
          margin: 16px;
          box-shadow: 0px 0px 5px 3px #f7f9fa;
        `
      )}
    >
      <Avatar
        style={{
          width: '100%',
          height: 200
        }}
        shape="rect"
      ></Avatar>
      <div
        style={{
          padding: 14
        }}
      >
        <Title></Title>
        <Line></Line>
        <Line></Line>
      </div>
    </div>
  );
};

export const List: React.FunctionComponent = () => {
  return (
    <div
      className={cx(
        'portal-skeleton-list',
        css`
          display: flex;
          justify-content: space-around;
          padding: 16px 24px;
          border-bottom: 1px solid #f0f0f0;
        `
      )}
    >
      <Avatar
        style={{
          width: 48,
          height: 48
        }}
      ></Avatar>
      <div
        style={{
          width: 'calc(100% - 120px)'
        }}
      >
        <Title></Title>
        <Paragraph rows={3}></Paragraph>
      </div>
    </div>
  );
};

export interface ParagraphProps extends StyleFix {
  /**
   * 文本行数
   */
  rows?: number;
  /**
   * 如果为一个字符串，表示最后一行的宽度，如果为数组则为每行的宽度
   */
  width?: string | string[];
}
export const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  rows = 4,
  width = '70%',
  className,
  style = emptyObj
}) => {
  return (
    <div className={cx('portal-skeleton-paragraph', className)}>
      {[...Array(rows).fill(0)].map((_, index) => (
        <Line width={getWidth(index, rows, width)} style={style} key={index}></Line>
      ))}
    </div>
  );
};

export interface AvatarProps extends StyleFix {
  /**
   * 形状
   */
  shape?: 'circle' | 'rect';
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  shape = 'circle',
  className,
  style = emptyObj
}) => {
  return (
    <span
      className={cx(
        'portal-skeleton-avatar',
        'portal-skeleton-element',
        css`
          display: inline-block;
          vertical-align: top;
          background: #f2f2f2;
          width: 32px;
          height: 32px;
          line-height: 32px;
          ${shape === 'circle' && 'border-radius:50%'}
        `,
        className
      )}
      style={style}
    ></span>
  );
};

export interface TitleProps extends StyleFix {
  /**
   * 宽度
   */
  width?: string;
}
export const Title: React.FunctionComponent<TitleProps> = ({
  className,
  style = emptyObj,
  width = '35%'
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3
      className={cx(
        'portal-skeleton-title',
        'portal-skeleton-element',
        css`
          height: 20px;
          margin-top: 16px;
          background: #f2f2f2;
          display: inline-block;
          margin: 0;
          padding: 0;
        `,
        className
      )}
      style={{
        width: width,
        ...style
      }}
    ></h3>
  );
};

export interface LineProps extends StyleFix {
  /**
   * 高度
   */
  height?: string;
  /**
   * 宽度
   */
  width?: string;
}
export const Line: React.FunctionComponent<LineProps> = ({
  width = '100%',
  height = '14px',
  className,
  style = emptyObj
}) => {
  return (
    <span
      style={{
        width: width,
        height: height,
        ...style
      }}
      className={cx(
        'portal-skeleton-line',
        'portal-skeleton-element',
        css`
          background-color: #f2f2f2;
          margin-top: 16px;
          display: inline-block;
        `,
        className
      )}
    ></span>
  );
};
Skeleton.Paragraph = Paragraph;
Skeleton.Avatar = Avatar;
Skeleton.Title = Title;
Skeleton.Line = Line;
Skeleton.Card = Card;
Skeleton.List = List;
function getWidth(index: number, rows: number, width: string | string[]) {
  if (Array.isArray(width)) {
    return width[index];
  }
  if (rows - 2 === index) {
    return '85%';
  }
  if (rows - 1 === index) {
    return width;
  }
  return undefined;
}
