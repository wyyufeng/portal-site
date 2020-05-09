/** @jsx jsx */
import React from 'react';
import { ThumbsUp } from 'react-feather';
import { css, jsx } from '@emotion/core';
import cls from 'classnames';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { button_base } from '../../styles';
import { useDataProvider } from '@portal-site/core';

export interface Props {
    /**
     * id
     */
    resource: string;
    /**
     * 是否可取消
     */
    cancellable?: boolean;
    /**
     * 图标
     */
    icon?: React.ReactNode;
}

export const Like: FunctionComponent<Props> = ({ resource, cancellable, icon: Icon }) => {
    const likeFetch = useDataProvider('likeIt');
    const unLikeFetch = useDataProvider('unLikeIt');
    const btn = useRef<HTMLButtonElement>(null);
    const [_active, setActive] = useState(false);
    useEffect(() => {
        const dom = btn.current!;
        const clickHandle = () => {
            if (dom.classList.contains('portal-like-active')) {
                if (cancellable) {
                    unLikeFetch(resource).finally(() => {
                        setActive(false);
                    });
                }
                return;
            }
            setActive(true);
            likeFetch(resource).finally(() => {
                setActive(true);
            });
        };

        dom.addEventListener('click', clickHandle);
        return () => {
            dom.removeEventListener('click', clickHandle);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resource, likeFetch, unLikeFetch]);

    return (
        <button
            ref={btn}
            className={cls('portal-like', { 'portal-like-active': _active })}
            css={[
                button_base,
                _active &&
                    css`
                        color: #ef5353;
                    `
            ]}
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
