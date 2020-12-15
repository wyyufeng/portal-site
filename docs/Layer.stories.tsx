import * as React from 'react';

import { Layer, dialog, Confirm } from '../packages/portal-layer/src/index';
import '../packages/portal-layer/theme/style.css';
export default {
  title: 'Layer/Layer',
  parameters: {
    component: Layer,
    description: 'some component _markdown_'
  }
};

export const Basic = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>打开</button>
      <Layer centered width={300} isOpen={open} handleClose={() => setOpen(false)}>
        em~~~~~
      </Layer>
    </div>
  );
};
export const ConfirmModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>打开</button>
      <Confirm isOpen={open} handleClose={() => setOpen(false)}>
        em~~~~~
      </Confirm>
    </div>
  );
};
export const Dialog = () => {
  return (
    <button
      onClick={() => {
        dialog({
          children: (
            <div>
              <p>some messages...some messages...</p>
              {/* <p>some messages...some messages...</p> */}
            </div>
          ),
          title: '确认删除吗',
          cancelButton: false,
          onOk: () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 2000);
            }).catch((err) => {
              console.log(err);
            });
          }
        });
      }}
    >
      打开
    </button>
  );
};

export const Toast = () => {
  return (
    <button
      onClick={() => {
        dialog({
          children: (
            <div>
              <p>some messages...some messages...</p>
              {/* <p>some messages...some messages...</p> */}
            </div>
          ),
          closable: false,
          actions: null,
          className: 'layer-toast',
          centered: true
        });
      }}
    >
      打开
    </button>
  );
};
export const MAlert = () => {
  return (
    <button
      onClick={() => {
        dialog({
          children: <div>some messages...some messages...</div>,
          closable: false,
          title: 'Title',
          className: 'layer-m-alert',
          centered: true
        });
      }}
    >
      打开
    </button>
  );
};
