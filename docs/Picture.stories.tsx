import * as React from 'react';
import { Picture } from '../packages/portal-components/src';

export default {
  title: 'Components/Picture',
  parameters: { component: Picture }
};

export const Basic = () => {
  const img = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    console.log(img);
  }, []);
  return (
    <Picture
      ref={img}
      style={{
        height: 200
      }}
      source={[
        '',
        'https://images.unsplash.com/photo-1593091430804-30029c2a7bd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      ]}
    />
  );
};
