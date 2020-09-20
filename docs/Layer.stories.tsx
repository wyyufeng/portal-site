import * as React from 'react';

import { Layer, dialog } from '../packages/portal-layer/src/index';
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
      <Layer isOpen={open} handleClose={() => setOpen(false)}>
        123123
      </Layer>
    </div>
  );
};

export const Dialog = () => {
  return (
    <button
      onClick={() => {
        dialog({
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          title: '确认删除吗',
          cancelButton: false,
          transition: 'scale',
          onOK: () => {
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
