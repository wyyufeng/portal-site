import * as React from 'react';
import ReactModal from 'react-modal';
import { FunctionComponent } from 'react';

const PREFIX_KEY = 'portal-';

function prefix(fixcls: string | Array<string>): string {
    const initialValue: string[] = [];
    if (Array.isArray(fixcls)) {
        return fixcls
            .filter(Boolean)
            .reduce((a, b) => {
                a.push(...b.trim().split(' '));
                return a;
            }, initialValue)
            .map((c: string) => PREFIX_KEY + c)
            .join(' ');
    }
    return PREFIX_KEY + fixcls;
}
export interface Props {
    layerClassName?: string;
    isOpen: boolean;
    handleClose?: React.MouseEventHandler | React.KeyboardEventHandler;
    shouldCloseOnMaskClick?: boolean;
    shouldCloseOnEsc?: boolean;
    alignCenter?: boolean;
    transition?: 'scale' | 'slideDown';
    style?: ReactModal.Styles;
    closeTimeoutMS?: number;
    appElement?: HTMLElement;
    [key: string]: any;
}
const CONTENT_CLASS_NAMES = {
    base: prefix('layer-content'),
    afterOpen: prefix('layer-content-open'),
    beforeClose: prefix('layer-content-close')
};
const MASK_CLASS_NAMES = {
    base: prefix('layer-mask'),
    afterOpen: prefix('layer-mask-open'),
    beforeClose: prefix('layer-mask-close')
};

export const Layer: FunctionComponent<Props> = ({
    children,
    isOpen,
    transition = 'slideDown',
    closeTimeoutMS = 350,
    shouldCloseOnMaskClick = true,
    shouldCloseOnEsc = true,
    style,
    handleClose,
    appElement = document.body,
    ...rest
}) => {
    const portalClassName = prefix('layer');
    CONTENT_CLASS_NAMES.base = `${CONTENT_CLASS_NAMES.base} ${transition}`;
    return (
        <ReactModal
            appElement={appElement}
            onRequestClose={handleClose}
            bodyOpenClassName="portal-layer-body-open"
            htmlOpenClassName="portal-layer-html-open"
            style={style}
            shouldCloseOnEsc={shouldCloseOnEsc}
            shouldCloseOnOverlayClick={shouldCloseOnMaskClick}
            closeTimeoutMS={closeTimeoutMS}
            portalClassName={portalClassName}
            overlayClassName={MASK_CLASS_NAMES}
            isOpen={isOpen}
            className={CONTENT_CLASS_NAMES}
            {...rest}
        >
            {children}
        </ReactModal>
    );
};
