import * as React from 'react';
import { omit } from 'lodash-es';
import Dialog, { DialogProps } from 'rc-dialog';
import { FunctionComponent } from 'react';

export interface LayerProps extends DialogProps {
  isOpen: boolean;
  handleClose?: () => any;
  centered?: boolean;
}

const closeIcon = (
  <span>
    <svg
      fill="currentColor"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
    >
      <path d="M572.16 512l183.467-183.04a42.667 42.667 0 10-60.587-60.587L512 451.84 328.96 268.373a42.667 42.667 0 00-60.587 60.587L451.84 512 268.373 695.04a42.667 42.667 0 000 60.587 42.667 42.667 0 0060.587 0L512 572.16l183.04 183.467a42.667 42.667 0 0060.587 0 42.667 42.667 0 000-60.587z" />
    </svg>
  </span>
);
export const Layer: FunctionComponent<LayerProps> = (props) => {
  const { handleClose, isOpen, children, className, wrapClassName, centered } = props;
  const rest = omit(props, [
    'visible',
    'onClose',
    'prefixCls',
    'isOpen',
    'handleClose',
    'children',
    'centered',
    'wrapClassName'
  ]);

  const _wrapClassName = `${centered ? 'layer-centered' : ''} ${wrapClassName ?? ''}`;

  return (
    <Dialog
      closeIcon={closeIcon}
      animation="zoom"
      prefixCls="layer"
      onClose={handleClose}
      visible={isOpen}
      className={className}
      wrapClassName={_wrapClassName}
      {...rest}
    >
      {children}
    </Dialog>
  );
};
