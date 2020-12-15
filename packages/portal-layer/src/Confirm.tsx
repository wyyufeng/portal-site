import React, { FunctionComponent } from 'react';
import { Layer, LayerProps } from './Layer';
import { Button } from '@portal-site/components';

export interface ConfirmProps extends LayerProps {
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  actions?: React.ReactNode;
  confirmLoading?: boolean;
  cancelButton?: boolean;
}

export type ConfirmFuncProps = Omit<ConfirmProps, 'isOpen'>;

export const _destroyFns: any[] = [];
const destroyAll = function destroyAllFn() {
  while (_destroyFns.length) {
    const close = _destroyFns.pop();
    if (close) {
      close();
    }
  }
};
export const Confirm: FunctionComponent<ConfirmProps> & { destroyAll: typeof destroyAll } = ({
  children,
  okText = '确定',
  cancelText = '取消',
  onOk,
  onCancel,
  actions,
  confirmLoading,
  cancelButton = true,
  className,
  ...rest
}) => {
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  const handleOk = () => {
    if (onOk) {
      onOk();
    }
  };

  const renderActions = () => {
    return (
      <div className="layer-confirm-actions">
        <Button loading={confirmLoading} type="primary" onClick={handleOk}>
          {okText}
        </Button>
        {cancelButton ? <Button onClick={handleCancel}>{cancelText}</Button> : null}
      </div>
    );
  };

  const footer = actions === undefined ? renderActions() : actions;
  const _className = `layer-confirm ${className ?? ''}`;
  return (
    <Layer className={_className} footer={footer} {...rest}>
      <div className="layer-confirm-body">{children}</div>
    </Layer>
  );
};
Confirm.destroyAll = destroyAll;
