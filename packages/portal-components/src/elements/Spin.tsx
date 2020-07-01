import React from 'react';
import { css, cx } from 'emotion';
import { StyleFix } from '../types';
import { FunctionComponent } from 'react';

export interface SpinProps extends StyleFix {
  /**
   * 颜色
   */
  color?: string;
  /**
   * 大小
   */
  size?: string;
  /**
   * 加载符号
   */
  indicator?: typeof SpinIndicatorC1;
  /**
   * 是否显示加载
   */
  spinning?: boolean;
}

interface SpinFunctionComponent<P = {}> extends FunctionComponent<P> {
  SpinIndicatorC1: typeof SpinIndicatorC1;
  SpinIndicatorC2: typeof SpinIndicatorC2;
}

export const Spin: SpinFunctionComponent<SpinProps> = ({
  className,
  style,
  indicator: Indicator = SpinIndicatorC1,
  spinning = true,
  color,
  size
}) => {
  return (
    <div
      style={style}
      className={cx(
        css`
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-size: 14px;
          font-variant: tabular-nums;
          line-height: 1.5715;
          font-feature-settings: 'tnum';
          text-align: center;
          vertical-align: middle;
        `,
        'portal-spin',
        spinning && 'portal-spinning',
        className
      )}
    >
      {spinning && <Indicator color={color} size={size} />}
    </div>
  );
};
export interface SpinElementProps {
  color?: string;
  size?: string;
  [key: string]: any;
}
// svg资源 来源于https://codepen.io/aurer/pen/jEGbA
const SpinIndicatorC1: FunctionComponent<SpinElementProps> = ({
  color = 'currentColor',
  size = '24'
}) => {
  return (
    <svg viewBox="0 0 40 40" fill={color} width={size} height={size}>
      <path
        opacity=".2"
        d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z"
      />
      <path d="M26.013 10.047l1.654-2.866a14.855 14.855 0 00-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
const SpinIndicatorC2: FunctionComponent<SpinElementProps> = ({
  color = 'currentColor',
  size = '24'
}) => {
  return (
    <svg viewBox="0 0 50 50" fill={color} width={size} height={size}>
      <path d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
Spin.SpinIndicatorC1 = SpinIndicatorC1;
Spin.SpinIndicatorC2 = SpinIndicatorC2;

export default Spin;
