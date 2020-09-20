import * as React from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { FunctionComponent } from 'react';
import {
  CONTENT_CLASS_NAMES,
  CONTENT_CLASS_NAMES_BASE,
  MASK_CLASS_NAMES,
  MASK_CLASS_NAMES_BASE,
  portalClassName
} from './style';
import { getScrollbarWidth } from './scrollWidth';

export interface LayerProps extends ReactModalProps {
  className?: string;
  isOpen: boolean;
  handleClose?: (...args: any[]) => any;
  verticalCenter?: boolean;
  transition?: 'scale' | 'slideDown';
  style?: ReactModal.Styles;
  [key: string]: any;
}
const body = document.body;
export const Layer: FunctionComponent<LayerProps> = ({
  children,
  isOpen,
  transition = 'slideDown',
  style,
  handleClose,
  className = '',
  verticalCenter,
  ...rest
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    if (isOpen) {
      const w = getScrollbarWidth() || 0;
      if (w > 1) {
        document.body.style.paddingRight = w + 'px';
      } else {
        document.body.style.paddingRight = 0 + 'px';
      }
    }
  }, [isOpen]);

  CONTENT_CLASS_NAMES.base = `${CONTENT_CLASS_NAMES_BASE} ${transition}`;
  verticalCenter
    ? (MASK_CLASS_NAMES.base = `${MASK_CLASS_NAMES_BASE} verticalCenter`)
    : (MASK_CLASS_NAMES.base = MASK_CLASS_NAMES_BASE);
  return (
    <ReactModal
      appElement={body}
      onRequestClose={handleClose}
      bodyOpenClassName="portal-layer-body-open"
      htmlOpenClassName="portal-layer-html-open"
      style={style}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={350}
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
