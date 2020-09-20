import React from 'react';
import { css, cx } from 'emotion';
import { StyleFix } from '../../types';
import { FunctionComponent } from 'react';
import { ReactComponent as SpinIndicatorC1 } from '../../assets/tail-spin.svg';
import { ReactComponent as SpinIndicatorC2 } from '../../assets/oval.svg';
import { ReactComponent as SpinIndicatorC3 } from '../../assets/three-dots.svg';

export interface SpinProps extends StyleFix {
  /**
   * 颜色
   */
  color?: string;
  /**
   * 大小(像素)
   */
  size?: number;
  /**
   * 加载符号
   */
  indicator?: typeof SpinIndicatorC1;
  /**
   * 是否显示加载
   */
  spinning?: boolean;
  /**
   * 自定义描述
   */
  tip?: string;
}

interface SpinFunctionComponent<P = {}> extends FunctionComponent<P> {
  SpinIndicatorC1: typeof SpinIndicatorC1;
  SpinIndicatorC2: typeof SpinIndicatorC2;
  SpinIndicatorC3: typeof SpinIndicatorC3;
}

export const Spin: SpinFunctionComponent<SpinProps> = ({
  className,
  style,
  indicator: Indicator = SpinIndicatorC1,
  spinning = true,
  color = '#1890ff',
  size = 24,
  tip
}) => {
  return (
    <div
      style={style}
      className={cx(
        css`
          box-sizing: border-box;
          display: inline-block;
          margin: 0;
          padding: 0;
          font-variant: tabular-nums;
          line-height: 1.5715;
          font-feature-settings: 'tnum';
          text-align: center;
          vertical-align: middle;
          color: ${color};
        `,
        'portal-spin',
        spinning && 'portal-spinning',
        className
      )}
    >
      <span
        className={css`
          width: 1em;
          height: 1em;
          color: inherit;
          display: inline-block;
          position: relative;
          font-size: ${size}px;
          svg {
            display: inline-block;
            vertical-align: top;
          }
        `}
      >
        {spinning && <Indicator />}
      </span>
      <span
        className={css`
          display: block;
          font-size: 14px;
          text-align: center;
          text-shadow: 0 1px 2px #fff;
        `}
      >
        {tip}
      </span>
    </div>
  );
};
Spin.SpinIndicatorC1 = SpinIndicatorC1;
Spin.SpinIndicatorC2 = SpinIndicatorC2;
Spin.SpinIndicatorC3 = SpinIndicatorC3;

export default Spin;
