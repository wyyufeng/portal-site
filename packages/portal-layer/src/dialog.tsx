import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Confirm, _destroyFns } from './Confirm';

export interface DialogFuncProps {
  title?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onOK?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  content?: React.ReactNode;
  cancelButton?: boolean;
  [k: string]: any;
}

const likePromise = (fn: any) => typeof fn.then === 'function' && typeof fn.catch === 'function';

export function dialog(config: DialogFuncProps) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const handleOk = () => {
    if (config.onOK) {
      const result = config.onOK();
      if (likePromise(result)) {
        update({
          confirmLoading: true
        });
        result.then(() => {
          new Promise((resolve) => {
            update({
              confirmLoading: false
            });
            resolve();
          }).then(close);
        });
      } else {
        close();
      }
    } else {
      close();
    }
  };

  let currentConfig = {
    ...config,
    isOpen: true,
    onCancel: close,
    onOk: handleOk,
    parentSelector: () => container
  } as any;
  function render(props: any) {
    setTimeout(() => {
      ReactDOM.render(<Confirm {...props}></Confirm>, container);
    });
  }

  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(container);
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
      if (config.onCancel) {
        config.onCancel();
      }
      for (let i = 0; i < _destroyFns.length; i++) {
        const fn = _destroyFns[i];
        if (fn === close) {
          _destroyFns.splice(i, 1);
          break;
        }
      }
    }
  }
  function close() {
    currentConfig = {
      ...currentConfig,
      isOpen: false,
      onAfterClose: destroy
    };
    render(currentConfig);
  }

  function update(newConfig: DialogFuncProps) {
    currentConfig = {
      ...currentConfig,
      ...newConfig
    };
    render(currentConfig);
  }
  currentConfig.handleClose = close;

  _destroyFns.push(destroy);

  render(currentConfig);
  return {
    update,
    destroy: close
  };
}
