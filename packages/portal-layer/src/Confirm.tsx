import React, { FunctionComponent } from 'react';
import { Layer, LayerProps } from './Layer';
import { Button } from '@portal-site/components';
import { layer_confirm } from './style';

export interface ConfirmProps extends LayerProps {
  title?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  actions?: React.ReactNode;
  content?: React.ReactNode;
  confirmLoading?: boolean;
  closable?: boolean;
  cancelButton?: boolean;
}

export const _destroyFns: any[] = [];

export const Confirm: FunctionComponent<ConfirmProps> & { destroyAll: () => void } = ({
  title,
  children,
  okText = '确定',
  cancelText = '取消',
  onOk,
  onCancel,
  actions,
  content,
  confirmLoading,
  closable = true,
  cancelButton = true,
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
      <>
        <Button loading={confirmLoading} type="primary" onClick={handleOk}>
          {okText}
        </Button>
        {cancelButton ? <Button onClick={handleCancel}>{cancelText}</Button> : null}
      </>
    );
  };

  const defaultActions = renderActions();

  return (
    <Layer {...rest}>
      <div className={layer_confirm}>
        {closable === undefined ? null : (
          <div className="layer-confirm-close" onClick={handleCancel}>
            ×
          </div>
        )}
        {title === undefined ? null : <header>{title}</header>}
        <div className="layer-confirm-body">{content}</div>
        <div className="layer-confirm-actions">{actions ? actions : defaultActions}</div>
      </div>
    </Layer>
  );
};

Confirm.destroyAll = function destroyAllFn() {
  while (_destroyFns.length) {
    const close = _destroyFns.pop();
    if (close) {
      close();
    }
  }
};
