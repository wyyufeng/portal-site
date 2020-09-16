import * as React from 'react';
import { ThumbsUp } from 'react-feather';
import { css, cx } from 'emotion';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { button_base } from '../../styles';

export interface Props {
  /**
   * 喜欢的时候
   */
  onLikeIt: () => any;
  /**
   * 不喜欢的时候
   */
  onDislikeIt: () => any;
  /**
   * 是否可取消
   */
  cancellable?: boolean;
  /**
   * 图标
   */
  icon?: React.ReactNode;
}

export const Like: FunctionComponent<Props> = ({
  onLikeIt,
  onDislikeIt,
  cancellable,
  icon: Icon
}) => {
  const btn = useRef<HTMLButtonElement>(null);
  const [_active, setActive] = useState(false);
  useEffect(() => {
    const dom = btn.current!;
    const clickHandle = () => {
      if (dom.classList.contains('portal-like-active')) {
        if (cancellable) {
          onDislikeIt();
          setActive(false);
        }
        return;
      }
      setActive(true);
      onLikeIt();
    };

    dom.addEventListener('click', clickHandle);
    return () => {
      dom.removeEventListener('click', clickHandle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLikeIt, onDislikeIt]);

  return (
    <button
      ref={btn}
      className={cx(
        button_base,
        _active &&
          css`
            color: #ef5353;
          `,
        { 'portal-like-active': _active },
        'portal-like'
      )}
      type="button"
    >
      {Icon}
    </button>
  );
};

Like.defaultProps = {
  icon: <ThumbsUp />,
  cancellable: false
};
