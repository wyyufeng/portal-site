import { css, cx } from 'emotion';
import React, { FunctionComponent, useEffect } from 'react';
import { StyleFix } from 'types';
import Spin from '../Spin';

export interface ButtonProps extends StyleFix {
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
  /**
   * 圆角按钮
   */
  rounded?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = function({
  loading = false,
  onClick,
  children,
  size = 'default',
  disabled = false,
  bindEnterKeyboard,
  type = 'default',
  rounded,
  className,
  style
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
      style={style}
      className={cx(
        css`
          height: 32px;
          min-width: 80px;
          line-height: 24px;
          display: inline-block;
          color: #646464;
          outline: 0;
          border: 1px solid transparent;

          text-align: center;
          cursor: pointer;
          padding: 4px 15px;
          border-radius: 4px;
          transition: all 0.3s;
          box-sizing: border-box;
          user-select: none;
          box-shadow: none;
          transition: all 0.3s ease-in;

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
          &.btn-md {
            width: 108px;
          }
          &.btn-lg {
            width: 168px;
          }
          &.btn-full {
            width: 100%;
          }
          &.btn-primary {
            border-color: transparent;
            background-color: #4285f4;
            color: #fff;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            &:hover {
              opacity: 0.8;
            }
          }
          &.btn-default {
            background-color: #fff;
            border-color: #dbdbdb;
            border-width: 1px;
            box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.05);
            &:hover {
              border-color: #cccccc;
            }
          }
          &.btn-rounded {
            border-radius: 290486px;
          }
        `,
        {
          'btn-disabled': disabled,
          'btn-loading': loading,
          'btn-md': size === 'md',
          'btn-lg': size === 'lg',
          'btn-full': size === 'full',
          'btn-primary': type === 'primary',
          'btn-default': type === 'default',
          'btn-rounded': rounded
        },
        className
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

export interface ButtonGroupProps {
  /**
   * 居中对齐
   */
  alignMiddle?: boolean;
  /**
   * 靠右
   */
  alignRight?: boolean;
}

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({
  children,
  alignMiddle,
  alignRight
}) => (
  <div
    className={cx(
      css`
        align-items: center;
        align-content: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        &.align-middle {
          justify-content: center;
        }
        &.align-right {
          justify-content: flex-end;
        }

        button:not(:last-child):not(.btn-full) {
          margin-right: 0.5rem;
        }
      `,
      {
        'align-middle': alignMiddle,
        'align-right': alignRight
      }
    )}
  >
    {children}
  </div>
);
