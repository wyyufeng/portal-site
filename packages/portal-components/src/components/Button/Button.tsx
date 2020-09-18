import { css, cx } from 'emotion';
import React, { FunctionComponent, useEffect } from 'react';
import Spin from '../Spin';

export interface ButtonProps {
  /**
   * 是否显示loading
   */
  loading?: boolean;
  /**
   * 点击事件
   */
  onClick?: (arg: any) => any;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 按钮大小
   */
  size?: 'default' | 'md' | 'lg' | 'full';
  /**
   * 是否绑定enter按键 (注意避免冲突)
   */
  bindEnterKeyboard?: boolean;
  /**
   * button type
   */
  type?: 'default' | 'primary';
}

export const Button: FunctionComponent<ButtonProps> = function({
  loading = false,
  onClick,
  children,
  size = 'default',
  disabled = false,
  bindEnterKeyboard,
  type = 'default'
}) {
  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        onClick && onClick(event);
      }
    };
    if (bindEnterKeyboard) {
      window.addEventListener('keyup', handleEnter);
    }
    return () => {
      window.removeEventListener('keyup', handleEnter);
    };
  }, [onClick, bindEnterKeyboard]);
  return (
    <button
      className={cx(
        css`
          height: 32px;
          line-height: 24px;
          display: inline-block;
          outline: 0;
          border: none;
          text-align: center;
          cursor: pointer;
          padding: 4px 15px;
          border-radius: 4px;
          min-width: 60px;
          transition: all 0.3s;
          box-sizing: border-box;
          background-color: #fff;
          color: #646464;
          transition: width 0.3s ease-in;
          .portal-spin {
            vertical-align: text-top;
            margin-right: 6px;
          }
          &.btn-disabled {
            pointer-events: none;
            opacity: 0.55;
            background-color: #eee;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          }
          &.btn-loading {
            pointer-events: none;
            opacity: 0.55;
          }
          &.md {
            width: 108px;
          }
          &.lg {
            width: 168px;
          }
          &.full {
            width: 100%;
          }
          &.btn-primary {
            background-color: #4285f4;
            color: #fff;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          }
          &.btn-default {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.26);
          }
        `,
        {
          'btn-disabled': disabled,
          'btn-loading': loading,
          md: size === 'md',
          lg: size === 'lg',
          full: size === 'full',
          'btn-primary': type === 'primary',
          'btn-default': type === 'default'
        }
      )}
      onClick={disabled || loading ? undefined : onClick}
    >
      {loading ? (
        <>
          <Spin color="#fff" size={14} />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export const ButtonGroup: FunctionComponent = ({ children }) => (
  <div
    className={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    `}
  >
    {children}
  </div>
);
