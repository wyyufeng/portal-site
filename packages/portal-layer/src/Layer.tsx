import * as React from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
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
export interface Props extends ReactModalProps {
  className?: string;
  isOpen: boolean;
  handleClose?: React.MouseEventHandler | React.KeyboardEventHandler;
  shouldCloseOnMaskClick?: boolean;
  shouldCloseOnEsc?: boolean;
  verticalCenter?: boolean;
  transition?: 'scale' | 'slideDown';
  style?: ReactModal.Styles;
  closeTimeoutMS?: number;
  appElement?: HTMLElement;
  [key: string]: any;
}

const CONTENT_CLASS_NAMES_BASE = prefix('layer-content');
const CONTENT_CLASS_NAMES = {
  base: CONTENT_CLASS_NAMES_BASE,
  afterOpen: prefix('layer-content-open'),
  beforeClose: prefix('layer-content-close')
};
const MASK_CLASS_NAMES_BASE = prefix('layer-mask');
const MASK_CLASS_NAMES = {
  base: MASK_CLASS_NAMES_BASE,
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
  className = '',
  appElement = document.body,
  verticalCenter,
  ...rest
}) => {
  const portalClassName = prefix('layer');
  CONTENT_CLASS_NAMES.base = `${CONTENT_CLASS_NAMES_BASE} ${transition}`;
  verticalCenter
    ? (MASK_CLASS_NAMES.base = `${MASK_CLASS_NAMES_BASE} verticalCenter`)
    : (MASK_CLASS_NAMES.base = MASK_CLASS_NAMES_BASE);
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
      portalClassName={className ? `${portalClassName} ${className}` : portalClassName}
      overlayClassName={MASK_CLASS_NAMES}
      isOpen={isOpen}
      className={CONTENT_CLASS_NAMES}
      {...rest}
    >
      {children}
    </ReactModal>
  );
};
